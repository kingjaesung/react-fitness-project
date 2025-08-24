import Header from "../component/Header";
import FitnessList from "../component/FitnessList";
import Button from "../component/Button";
import { useContext, useState, useEffect } from "react";
import { FitnessStateContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./Home.css";


const Home = () => {
  const data = useContext(FitnessStateContext);
  
  const [nowDate, setNowDate] = useState(new Date());
  const title = `${nowDate.getFullYear()}년 ${nowDate.getMonth() + 1}월`;
  const [filteredDate, setFilteredDate] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  useEffect(() => {
    const beginTime = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      1,
      0
    ).getTime();
    const endTime = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth() + 1,
      0,
      23,
      59,
      59
    ).getTime();

    setFilteredDate(
      data.filter((it) => {
        const targetTime = new Date(it.date).getTime();
        return beginTime <= targetTime && targetTime <= endTime;
      })
    );
  }, [nowDate, data]);

  // 지금 시각이 이번달 1일 0시0분 이상 이번달 마지막 날 23시 59분 59초 전일때

  const increaseMonth = () => {
    if(month === 11) {
        setYear(year + 1);
        setMonth(0);
    }else {
        setMonth(month + 1);
    }
    setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1));
  };

  const decreaseMonth = () => {
    if(month === 0){
        setYear(year -1);
        setMonth(11);
    }else{
        setMonth(month - 1);
    }
    setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() - 1));
  };

    return (
        <div className="calendar"> 
            <h1>나의 운동 기록</h1>
            <Header
                title={title}
                left={<Button text="<" onClick={decreaseMonth}/>}
                right={<Button text=">" onClick={increaseMonth}/>}
            />
            <table>
                <thead>
                    <tr>
                        <th>일</th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th>토</th>
                    </tr>
                </thead>
                {<FitnessList year={year} month={month} value={filteredDate}/>}
            </table>
        </div>
    )
}

export default Home;
