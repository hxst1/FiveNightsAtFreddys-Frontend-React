import styled from "styled-components";
import Robot from "../Robot/Robot";

const List = styled.ul`
  margin-top: 60px;
  display: flex;
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
