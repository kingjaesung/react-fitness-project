import Header from "../component/Header";
import Button from "../component/Button";
import Detail from "../component/Detail";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FitnessStateContext } from "../App";

const Exercise = () => {
  const data = useContext(FitnessStateContext);
   
  const navigate = useNavigate();

  const { no } = useParams();

  const target = data.find((it) => String(it.no) === no);

  if (!target) {
    return <div>존재하지 않는 항목입니다.</div>;
  }

  const goback = () => {
    navigate(-1);
  }
  
  return(
    <div>
        <Header
            left={<Button text="<뒤로가기" onClick={goback}/>}
            title={target.title}
        />
        <Detail
            no={no}
            title={target.title}
            weight={target.weight}
            set={target.set}
            count={target.count} 
            date={target.date}
            calorie={target.calorie}
            content={target.content}
            previewUrl={target.previewUrl}
        />
    </div>
  );
};

export default Exercise;
