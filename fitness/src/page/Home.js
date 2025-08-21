import Header from '../component/Header'
import FitnessList from '../component/FitnessList'
import Button from '../component/Button'
import { useContext } from 'react'
import { DiaryStateContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Home = ({date}) => {
    const data = useContext(DiaryStateContext);
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/new");
    }

    return (
        <div> 
            <Header
                title={date}
                left={<Button type="default" text="<"/>}
                right={<Button type="default"text=">"/>}
            />
            <Button type="defalut" text="등록" onClick={onClick}/><hr />
            {data.map((it) =>(
                <FitnessList key={it.no} value={it}/>
            ))}
        </div>
    )
}

export default Home;