import Header from '../component/Header'
import FitnessList from '../component/FitnessList'
import Button from '../component/Button'
import { useContext, useState, useEffect } from 'react'
import { FitnessStateContext } from '../App'
import { useNavigate } from 'react-router-dom'

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
        const beginTime = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1, 1).getTime();
        const endTime = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0, 23, 59, 59).getTime();
        
        setFilteredDate(data.filter(it => { 
            const targetTime = new Date(it.date).getTime();
            return beginTime <= targetTime && targetTime <= endTime;
        }));
    }, [nowDate, data]);

    const increaseMonth = () => {
        setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1));
        console.log(filteredDate);
    };

    const decreaseMonth = () => {
        setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() - 1));
    };

    return (
        <div> 
            <Header
                title={title}
                left={<Button text="<" onClick={decreaseMonth}/>}
                right={<Button text=">" onClick={increaseMonth}/>}
            />
<<<<<<< HEAD
            <Button text="등록" onClick={onClick}/><hr />
            <FitnessList value={filteredDate}/>
=======
            <Button type="default" text="등록" onClick={onClick}/><hr />
            {data.map((it) =>(
                <FitnessList key={it.no} value={it}/>
            ))}
>>>>>>> ae42f12b428399a5bcaca75e3f29e14367360971
        </div>
    )
}

export default Home;