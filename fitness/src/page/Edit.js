import { useContext, useState } from "react";
import Update from "../component/Update";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import { FitnessDispatchContext, FitnessStateContext } from "../App";

const Edit = () => {

    const navigate = useNavigate();
    const { no } = useParams();
    const data = useContext(FitnessStateContext);
    const { onUpdate } = useContext(FitnessDispatchContext)
    


    const eItem = data.find((it) => String(it.no) === no);

    const [state, setState] = useState(eItem);

    const goBack = () => {
        navigate(-1)
    }

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setState(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const clickOnUpdate = (eItem) => {
        if(window.confirm("일기를 정말 수정할까요?")){
            const {date,no,weight,title,count,set,calorie} = state;
            console.log(date,no,weight,title,count,set,calorie);
            onUpdate(no, title, weight, set, count, date ,calorie);
            navigate("/",{replace:true});
        }
        
        
    }




    return (

        <div>
            <Header
                left={<Button type="positive" text="수정완료" onClick={clickOnUpdate} />}
                title={"수정페이지"}
                right={<Button text="취소하기" onClick={goBack} />}
            />
            <div>
                <label>운동종목</label>
                <textarea name="title" value={state.title} onChange={handleChange} />
            </div>
            <div>
                <label>무게</label>
                <input
                    name="weight"
                    value={state.weight}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>세트 수</label>
                <input
                    name="set"
                    value={state.set}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>반복횟수</label>
                <input
                    name="count"
                    value={state.count}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>운동날짜</label>
                <input
                    type="date"
                    name="date"
                    value={state.date}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>소모 칼로리</label>
                <input
                    name="calorie"
                    value={state.calorie}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default Edit; 