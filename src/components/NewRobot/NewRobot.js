import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CreateRobotThunk } from "../../redux/thunks/RobotsThunk";

const RobotForm = styled.form`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Press Start 2P";
  width: 99vw;
  height: 99vh;
  & .btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10px;

    & input {
      background-color: #424242;
      border: 1px solid #fff;
      padding: 5px;
      color: #fff;
      width: 130px;
      outline: none;
    }

    & label {
      width: 190px;
    }
    & label:hover {
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

    & button {
      background-color: #424242;
      padding: 10px;
      border: 2px solid #fff;
      list-style: none;
      font-family: "Press Start 2P";
      text-decoration: none;
      color: #fff;
    }

    & button:hover {
      filter: invert(1);
    }
  }
`;

const NewRobot = () => {
  const blankData = {
    name: "",
    date: "",
    endurance: "",
    speed: "",
    url: "",
  };
  const [formData, setFormData] = useState(blankData);
  const handleDataChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const dispatch = useDispatch();

  const handleSubmitEvent = (event) => {
    event.preventDefault();
    const { name, date, endurance, speed, url } = formData;
    const robot = {
      name,
      date,
      endurance,
      speed,
      url,
    };
    dispatch(CreateRobotThunk(robot));
  };

  const audio = new Audio("audio.mp3");

  const start = () => {
    audio.play();
  };

  return (
    <RobotForm onSubmit={handleSubmitEvent}>
      <ul>
        <li>
          <label htmlFor="name">name:</label>
          <input
            id="name"
            type="text"
            autoComplete="new-password"
            placeholder="animatronic name"
            onChange={handleDataChange}
            value={formData.name}
          />
        </li>
        <li>
          <label htmlFor="url">image url:</label>
          <input
            id="url"
            type="text"
            onChange={handleDataChange}
            autoComplete="new-password"
            placeholder="animatronic image"
          />
        </li>
        <li>
          <label htmlFor="speed">speed:</label>
          <input
            onChange={handleDataChange}
            id="speed"
            type="number"
            placeholder="0/10"
            max="10"
            min="0"
          />
        </li>
        <li>
          <label htmlFor="endurance">endurance:</label>
          <input
            onChange={handleDataChange}
            id="endurance"
            type="number"
            placeholder="0/10"
            max="10"
            min="0"
          />
        </li>
        <li>
          <label htmlFor="date">date:</label>
          <input
            id="date"
            type="date"
            onChange={handleDataChange}
            placeholder="year"
          />
        </li>
        <li className="btn">
          <button onClick={start} type="submit">
            create
          </button>
        </li>
      </ul>
    </RobotForm>
  );
};

export default NewRobot;
