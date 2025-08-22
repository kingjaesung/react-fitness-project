import Header from "../component/Header";
import FitnessList from "../component/FitnessList";
import Button from "../component/Button";
import { useContext, useState, useEffect } from "react";
import { FitnessStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const data = useContext(FitnessStateContext);
  const navigate = useNavigate();

  const [nowDate, setNowDate] = useState(new Date());
  const title = `${nowDate.getFullYear()}년 ${nowDate.getMonth() + 1}월`;
  const [filteredDate, setFilteredDate] = useState([]);

  const onClick = () => {
    navigate("/new");
  };

  useEffect(() => {
    const beginTime = new Date(
      nowDate.getFullYear(),
      nowDate.getMonth(),
      1,
      1
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

<<<<<<< HEAD
    return (
        <div> 
            <Header
                title={title}
                left={<Button text="<" onClick={decreaseMonth}/>}
                right={<Button text=">" onClick={increaseMonth}/>}
            />
            <Button text="등록" onClick={onClick}/><hr />
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
                {<FitnessList value={filteredDate}/>}
            </table>
        </div>
    )
}
=======
  const increaseMonth = () => {
    setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1));
  };
>>>>>>> 6c0e9900bb5eda9426de74df560daec7763eaac6

  const decreaseMonth = () => {
    setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() - 1));
  };

  return (
    <div className="list_main">
      <Header
        title={title}
        left={<Button text="<" onClick={decreaseMonth} />}
        right={<Button text=">" onClick={increaseMonth} />}
      />
      <Button text="등록" onClick={onClick} />
      <hr />
      <div>
        <FitnessList value={filteredDate} />
      </div>
    </div>
  );
};

export default Home;
