import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CreateRobotThunk } from "../../redux/thunks/RobotsThunk";

const RobotForm = styled.form`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  & > input {
    width: 100%;
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

  return (
    <RobotForm onSubmit={handleSubmitEvent}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          autoComplete="new-password"
          placeholder="Robot Name"
          onChange={handleDataChange}
          value={formData.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="url">Image URL</label>
        <input
          id="url"
          type="text"
          onChange={handleDataChange}
          autoComplete="new-password"
          placeholder="Robot Image"
        />
      </div>
      <div className="form-group">
        <label htmlFor="speed">Speed</label>
        <input
          onChange={handleDataChange}
          id="speed"
          type="number"
          placeholder="0/10"
          max="10"
          min="0"
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="endurance">Endurance</label>
        <input
          onChange={handleDataChange}
          id="endurance"
          type="number"
          placeholder="0/10"
          max="10"
          min="0"
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="date">Fabrication Date</label>
        <input
          id="date"
          type="number"
          onChange={handleDataChange}
          placeholder="year"
        />
      </div>
      <button type="submit">Create</button>
    </RobotForm>
  );
};

export default NewRobot;
