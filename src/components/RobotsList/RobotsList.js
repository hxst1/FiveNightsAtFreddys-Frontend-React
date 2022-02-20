import styled from "styled-components";
import Robot from "../Robot/Robot";

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

function RobotsList({ robotsList }) {
  return (
    <List>
      {robotsList.map((robot) => (
        <Robot robot={robot} key={robot._id} />
      ))}
    </List>
  );
}

export default RobotsList;
