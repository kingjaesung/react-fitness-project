
import Header from '../component/Header'
import FitnessList from '../component/FitnessList'

const Home = ({data}) => {

   
   

    return (
        <div> 
            <Header left={"안녕"}/>
            <FitnessList data={data} />
           
        </div>
    )
}

export default Home;