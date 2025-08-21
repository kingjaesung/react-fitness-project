import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";


const New = () => {
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate(-1);
    }

    const headerTitle = "기록 페이지"
    return (
        <div> 
            <Header title={headerTitle} left={<Button text="< 뒤로가기" onClick={goBack} />} />
            <Editor />
        </div>
    )
}

export default New;