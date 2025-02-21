import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SpellsList } from "../interfaces/SpellsList";


const SingleSpell=styled.button`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
    background: beige;
`;

export default function SpellButton({spell} : {spell: SpellsList}) {
    const nav = useNavigate();

    function handleClick() {
        nav(`/spell/${spell.index}`)
    }

    return (
        <SingleSpell onClick={handleClick}>
            <h1>{spell.name}</h1>
            <p>Spell Level: {spell.level}</p>
        </SingleSpell>
    )
}