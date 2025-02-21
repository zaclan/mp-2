import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spell } from "../interfaces/SpellDetails";
import styled from "styled-components";


const SpellDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: beige
`

const SpellDesc = styled.p `
    justify-content: center;
    margin: auto;
    max-width: 30%;
`


export default function SpellDetails() {
    const { spellIndex } = useParams()
    const [data, setData] = useState<Spell>();
    
    useEffect( () => {
        async function fetchData() {
            const rawData = await fetch(`https://www.dnd5eapi.co/api/spells/${spellIndex}`);
            const result = await rawData.json();
            setData(result); 
        }

        fetchData()
            .then(() => console.log("Individual Spell Data fetched successfully" ))
            .catch((e: Error) => console.log("There was an error: " + e))
    }, [spellIndex])
    

    return (
        <SpellDiv>
            <h1>{data?.name}</h1>
            <p>Level : {data?.level}</p>
            <p>Duration: {data?.duration}</p>
            <p>Casting Time: {data?.casting_time}</p>
            <p>Description:</p>
            <SpellDesc>{data?.desc}</SpellDesc>
        </SpellDiv>
    )
}