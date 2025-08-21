import Header from "../component/Header";
import Button from "../component/Button";
import Detail from "../component/Detail";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";

const Exercise = () => {
    const data = useContext(DiaryStateContext);
    const {no} = useParams();

    const target = data.find((it) => String(it.no) === no);

    return(
        <div>
            <Header 
                left={<Button text="수정하기" type="positive"/>}
                title={target.title}
                right={<Button text="삭제하기" type="negative"/>}
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