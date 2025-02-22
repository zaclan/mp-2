
import {styled} from "styled-components";
import {SpellsList} from "../interfaces/SpellsList"
import SpellButton from "./SpellButton";


const AllSpellsDiv = styled.div `
    display: flex; 
    flex-flow: row wrap;
    justify-content: space-evenly; 
    background-color: lightblue;
`;

export default function SpellsDisplay(props : {data: SpellsList[]}) {

    return (
        <AllSpellsDiv>
            {
                props.data.map((spell: SpellsList) => 
                    <SpellButton key={spell.index} spell={spell}/>
                )
            }
        </AllSpellsDiv>
    )
}