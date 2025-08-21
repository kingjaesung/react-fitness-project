import "./Fitness.css";
import { useNavigate } from "react-router-dom";

const FitnessList = ({value}) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/exercise/${value.no}`);
  }

  return (
    <div onClick={onClick}>
      <div>
        {value.title}<br />
        {value.weight}<br />
        {value.set}<br />
        {value.count}<br />
        {value.date}<br />
        {value.calorie}<br />
      </div><hr />
    </div>
  );
};

export default FitnessList;
