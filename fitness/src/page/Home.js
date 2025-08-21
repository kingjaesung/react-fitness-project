
import Header from '../component/Header'
import FitnessList from '../component/FitnessList'

const Home = ({dataa}) => {

   
  
    return (
        <div> 
            <Header left={"안녕"}/>
            <FitnessList data={dataa} />
            {dataa}

        </div>
    )
}

export default Home;