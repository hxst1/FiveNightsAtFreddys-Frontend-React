import styled from "styled-components";

const ListContainer = styled.li`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 10px;
  border: 3px solid #8d7819;
  list-style: none;
  font-family: monospace;
`;

const Foto = styled.img`
  color: #fff;
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-top: 3px solid #fff;
  border-bottom: 3px solid #fff;
`;

const Name = styled.h2`
  color: #fff;
  padding: 10px;
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
`;

const Properties = styled.p`
  color: #fff;
  display: flex;
  font-size: 15px;
  padding: 3px;
`;

const Robot = ({ robot: { name, speed, endurance, date, url } }) => {
  return (
    <ListContainer>
      <Name>{name}</Name>
      <Foto src={url} alt={name} />
      <Properties>Speed: {speed}</Properties>
      <Properties>Endurance: {endurance}</Properties>
      <Properties>Creation date: {date}</Properties>
    </ListContainer>
  );
};

export default Robot;
