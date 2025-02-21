import { useState, useEffect } from "react";
import { SpellsList } from "../interfaces/SpellsList";
import SpellsDisplay  from "../components/SpellsDisplay"

export default function SpellFetch() {
     const [data, setData] = useState<SpellsList[]>([]);
    
      useEffect( () => {
          async function fetchData(): Promise<void> {
              const rawData = await fetch("https://www.dnd5eapi.co/api/spells");
              const {results} : {results: SpellsList[]} = await rawData.json();
              setData(results);
          }
          fetchData()
                .then(() => console.log("Data fetched sucessfully"))
                .catch((e: Error) => console.log("There was an error: " + e));
      }, [data.length]);
    
      return (
          <SpellsDisplay data={data}/>
      )
}
