import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import RobotsList from "./components/RobotsList/RobotsList";
import { RobotsThunk } from "./redux/thunks/RobotsThunk";

const Container = styled.div`
  height: 100%;
  border: 3px solid #fff;
  margin-top: 60px;
`;

function App() {
  const robotsList = useSelector((state) => state.robotsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RobotsThunk);
  }, [dispatch]);

  return (
    <Container>
      <HeaderContainer />
      <RobotsList robotsList={robotsList} />
    </Container>
  );
}

export default App;
