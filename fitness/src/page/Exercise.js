import Header from "../component/Header";
import Button from "../component/Button";
import Detail from "../component/Detail";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Exercise = () => {
    const data = useContext(DiaryStateContext);
    const {onDelete} = useContext(DiaryDispatchContext);



    const navigate = useNavigate();

    const {no} = useParams();

    const target = data.find((it) => String(it.no) === no);
    
    const goEdit = () =>{
        navigate(`/edit/${target.no}`, { state: { target }});
    }

    const onClickDelete = () =>{
        if(window.confirm("일기 삭제 할까요? 복구 안됩니다!"));
        onDelete(target.no);
        navigate("/",{replace:true });
    }
  
    return(
        <div>
            <Header 
                left={<Button text="수정하기" type="positive" onClick={goEdit}/>}
                title={target.title}
                right={<Button text="삭제하기" type="negative" onClick={onClickDelete}/>}
            />
            <Detail
                title={target.title}
                weight={target.weight}
                set={target.set}
                count={target.count}
                date={target.date}
                calorie={target.calorie}
            />
        </div> 
    )
}

export default Exercise;