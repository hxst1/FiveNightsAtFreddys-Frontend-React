import "@fontsource/press-start-2p";
import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Factory from "./pages/Factory/Factory";
import HomePage from "./pages/HomePage/HomePage";

const Container = styled.div`
  height: 100%;
  border: 3px solid #fff;
`;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/factory" element={<Factory />} />
      </Routes>
    </Container>
  );
}

export default App;
