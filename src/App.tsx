import SpellFetch from "./components/SpellFetch.tsx";
import SpellDetails from "./components/SpellDetails.tsx";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App() {
  return (
    <Router>
      <ParentDiv>
        <Routes>
          <Route path="/" element={<SpellFetch />} />
          <Route path="/spell/:spellIndex" element={<SpellDetails />} />
        </Routes>
      </ParentDiv>
    </Router>
  );
}

