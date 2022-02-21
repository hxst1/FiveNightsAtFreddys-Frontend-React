import { Link } from "react-router-dom";
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
    font-family: "Press Start 2P";
    font-size: 20px;
    animation: image-generated 2s alternate infinite;
  }

  @keyframes image-generated {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    15% {
      opacity: 1;
    }
    20% {
      opacity: 0;
    }
    23% {
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    70% {
      opacity: 0;
    }
    80% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  & .container-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    & li {
      list-style: none;
      & a {
        background-color: #424242;
        padding: 10px;
        margin: 10px;
        border: 2px solid #fff;
        list-style: none;
        font-family: "Press Start 2P";
        text-decoration: none;
        color: #fff;
      }

      & a:hover {
        filter: invert(1);
      }
    }
  }
`;

const HeaderContainer = () => {
  return (
    <Container>
      <a
        target="_blank"
        className="uwu"
        href="https://wellsousaaa.github.io/Five-Nights-at-Freddys-Web/"
        rel="noreferrer"
      >
        uwu
      </a>
      <h1>Five Nights at Freddy's</h1>
      <ul className="container-buttons">
        <li className="button">
          <Link to="/home">home</Link>
        </li>
        <li className="button">
          <Link to="/factory">factory</Link>
        </li>
      </ul>
    </Container>
  );
};

export default HeaderContainer;
