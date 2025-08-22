import Header from '../component/Header'
import FitnessList from '../component/FitnessList'
import Button from '../component/Button'
import { useContext, useState, useEffect } from 'react'
import { FitnessStateContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Home = ({}) => {
    const data = useContext(FitnessStateContext);
    const navigate = useNavigate();

    const [nowDate, setNowDate] = useState(new Date());
    const title = `${nowDate.getFullYear()}년 ${nowDate.getMonth() + 1}월`;
    const [filteredDate, setFilteredDate] = useState();
    const beginTime = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1, 1).getTime();
    const endTime = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0, 23, 59, 59).getTime();
    const targetTime = new Date(data.date).getTime();

    const onClick = () => {
        navigate("/new");
    };

    useEffect(() => {
        setFilteredDate(
            data.filter((it) => 
                beginTime <= targetTime && targetTime <= endTime
            )
        );
    }, [data, nowDate]);

    const increaseMonth = () => {
        setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1));
    };

    const decreaseMonth = () => {
        setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() - 1));
    };

    return (
        <div> 
            <Header
                title={title}
                left={<Button type="default" text="<" onClick={decreaseMonth}/>}
                right={<Button type="default"text=">" onClick={increaseMonth}/>}
            />
            <Button type="defalut" text="등록" onClick={onClick}/><hr />
            {data.map((it) =>(
                <FitnessList key={it.no} value={it} data={filteredDate}/>
            ))}
        </div>
    )
}

export default Home;