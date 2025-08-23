import "./Fitness.css";
import { useNavigate } from "react-router-dom";

const FitnessList = ({year, month, value}) => {
  const navigate = useNavigate();

  const monthDays = new Date(year, month + 1, 0).getDate(); // 1일부터 마지막날까지
  const firstDay = new Date(year, month, 1).getDay(); // 0=일요일, 1=월요일...6=토요일
  
  const cells = []; // 1달 날짜 배열
  // 앞쪽 빈칸
  for(let i = 0; i < firstDay; i++) {
    cells.push(null);
  }
  // 날짜 채우기
  for(let d = 1; d <= monthDays; d++) {
    cells.push(d);
  }
  // 뒤쪽 빈칸
  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  // 주 단위로 자르기
  const weeks = [];
  for(let i = 0; i < cells.length; i += 7){
    weeks.push(cells.slice(i, i + 7));
  }

  const onClick = (no) => {
    if(!no && no !== 0){
      navigate("/New");
    }else {
      navigate(`/exercise/${no}`);
    }
  }

  return (
    <tbody>
      {weeks.map((week, wIndex) => (
        <tr key={wIndex}>
          {week.map((day, dIndex) => {
            if(!day) {
              return <td key={`empty-${wIndex}-${dIndex}`}></td>
            }
            const item = value.find(
              (it) => Number(it.date.split("-")[2]) === day);
            
              // 토요일과 일요일에 해당하는 클래스 이름 정의
              const weekday = new Date(year, month, day).getDay();
              let extraClass = "";
              if (weekday === 0) extraClass = "sunday";
              else if (weekday === 6) extraClass = "saturday";

              return (
                <td
                  key={`day-${day}`}
                  onClick={() => onClick(item ? item.no : null)}
                  className={`${item ? "include" : ""} ${extraClass}`}
                >
                  <label>{day}일</label>
                </td>
              )
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default FitnessList;
