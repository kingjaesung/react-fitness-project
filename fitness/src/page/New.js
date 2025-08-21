import { useNavigate } from "react-router-dom";
import Header from "../component/Header";


const New = () => {
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate(-1);
    }

    const headerTitle = "기록 페이지"
    return (
        <div> 
            <Header title={headerTitle} left={<button type="button" onClick={goBack}>뒤로가기</button>}/>
        </div>
    )
}

export default New;