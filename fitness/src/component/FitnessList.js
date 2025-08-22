import "./Fitness.css";
import { useNavigate } from "react-router-dom";

const FitnessList = ({value}) => {
  const navigate = useNavigate();

  const month = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
  const days = Array.from({length: month}, (_, index) => index + 1);
  const weeks = [];
  for (let i = 0; i < days.length; i += 7){
    weeks.push(days.slice(i, i + 7));
  }
 
  const onClick = (no) => {
    if(!no && no !== 0) return;
    
    navigate(`/exercise/${no}`);
  }

  return (
    <tbody>
      {weeks.map((week, wIndex) => (
        <tr key={wIndex}>
          {week.map((day) => {
            const item = value.find(
              (it) => Number(it.date.split("-")[2]) === day);
            
              return (
                <td
                  key={month}
                  onClick={() => item && onClick(item.no)}
                >
                  <label>{day}일</label><br />
                  {item ? item.title : null}
                </td>
              )
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default FitnessList;
