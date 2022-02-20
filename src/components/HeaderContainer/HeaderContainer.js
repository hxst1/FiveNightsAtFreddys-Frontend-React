import styled from "styled-components";

const Container = styled.header`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border: 3px solid #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  & .uwu {
    color: #000;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    animation: rotating 2s linear infinite;
    font-size: 10px;
    margin-right: 100px;
  }

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  & h1 {
    color: #fff;
    font-family: monospace;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HeaderContainer = () => {
  return (
    <Container>
      <a
        className="uwu"
        href="https://wellsousaaa.github.io/Five-Nights-at-Freddys-Web/"
      >
        uwu
      </a>
      <h1>Five Nights at Freddy's</h1>
    </Container>
  );
};

export default HeaderContainer;
