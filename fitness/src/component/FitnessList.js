import "./Fitness.css";
import { useNavigate } from "react-router-dom";

const FitnessList = ({value}) => {
  const navigate = useNavigate();

  const onClick = (no) => {
    navigate(`/exercise/${no}`);
  }

  return (
    <div>
      {value.map((it, index) => (
        <div key={index} onClick={() => onClick(it.no)}>
          {it.title}<br />
          {it.weight}<br />
          {it.set}<br />
          {it.count}<br />
          {it.date}<br />
          {it.calorie}<br />
          {it.content}<br />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FitnessList;
