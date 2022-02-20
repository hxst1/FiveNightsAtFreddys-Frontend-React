import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import RobotsList from "./components/RobotsList/RobotsList";
import { RobotsThunk } from "./redux/thunks/RobotsThunk";

const Container = styled.div`
  height: 100%;

  & h1 {
    color: #fff;
    font-family: monospace;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function App() {
  const robotsList = useSelector((state) => state.robotsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RobotsThunk);
  }, [dispatch]);

  return (
    <Container>
      <h1>Five Nights at Freddy's</h1>
      <RobotsList robotsList={robotsList} />
    </Container>
  );
}

export default App;
