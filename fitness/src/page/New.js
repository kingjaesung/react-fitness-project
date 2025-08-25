import { useLocation, useNavigate } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import { useContext } from "react";
import { FitnessDispatchContext } from "../App";


const New = () => {
    const navigate = useNavigate();
    const {onCreate} = useContext(FitnessDispatchContext);
    const location = useLocation(); //현재 페이지로 넘어올 때 navigate에서 전달한 state값 가져오기 위한 훅
    const selectDate =location.state?.selectDate || ""; //값이 없으면 에러처리가 아니라 undefined반환
    
    const goBack = () => {
        navigate(-1);
    }

const onSubmit = (data) => {
    const { title, weight, set, count, date, content, previewUrl} = data;
    if (!title || !weight || !set || !count || !content) {
        alert("모든 항목을 입력해 주세요 !");
        return;
    } else {
        // 칼로리 계산해서 같이 넘김
        const calorie = set * count * 8;
        console.log(data);
        // onCreate 호출 시 calorie까지 넘김
        onCreate({title, weight, set, count, date, calorie, content, previewUrl});
        navigate("/", { replace: true });
    }
};


    const headerTitle = "기록 페이지"
    return (
        <div> 
            <Header title={headerTitle} left={<Button text="< 뒤로가기" onClick={goBack} />} />
            <Editor onSubmit={onSubmit} selectDate={selectDate} />
        </div>
    )
}

export default New;