import "@fontsource/press-start-2p";
import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Create from "./pages/Create/Create";
import HomePage from "./pages/HomePage/HomePage";

const Container = styled.div`
  height: 100%;
  border: 3px solid #fff;
  margin-top: 60px;
`;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Container>
  );
}

export default App;
