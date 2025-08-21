import Header from '../component/Header'
import FitnessList from '../component/FitnessList'
import Button from '../component/Button'
import { useContext } from 'react'
import { DiaryStateContext } from '../App'

const Home = ({date}) => {
    const data = useContext(DiaryStateContext);

    return (
        <div> 
            <Header
                title={date}
                left={<Button type="default" text="<"/>}
                right={<Button type="default"text=">"/>}
            />
            {data.map((it) =>(
                <FitnessList key={it.no} value={it}/>
            ))}
        </div>
    )
}

export default Home;