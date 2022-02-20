import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import RobotsList from "../../components/RobotsList/RobotsList";
import { RobotsThunk } from "../../redux/thunks/RobotsThunk";

const HomePage = () => {
  const robotsList = useSelector((state) => state.robotsList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RobotsThunk);
  }, [dispatch]);

  return (
    <>
      <HeaderContainer />
      <RobotsList robotsList={robotsList} />
    </>
  );
};

export default HomePage;
