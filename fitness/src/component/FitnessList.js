import "./Fitness.css";
import { useNavigate } from "react-router-dom";

const FitnessList = ({value}) => {
  const navigate = useNavigate();

  const onClick = (no) => {
    navigate(`/exercise/${no}`);
  }

  return (
    <div>
      {value.map((it, index) => (<div key={index} onClick={() => onClick(it.no)}>{it.title}</div>))}
    </div>
  );
};

export default FitnessList;
