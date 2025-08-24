import "./Detail.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FitnessDispatchContext } from "../App";

const Detail = ({ no, title, weight, set, count, date, calorie, content, previewUrl }) => {
  const navigate = useNavigate();
  const { onDelete } = useContext(FitnessDispatchContext);

  const goEdit = () => {
    navigate(`/edit/${no}`, { state: { title, weight, set, count, date, calorie, content, previewUrl } });
  };

  const onClickDelete = () => {
    if (window.confirm("항목을 삭제할까요? 복구 안됩니다!"));
    onDelete(no);
    navigate("/", { replace: true });
  };

  return (
    <div className={["Detail_div Detail"].join(" ")}>
      <div className="item">
        <label>운동일자 : </label>
        <div>{date}</div>
      </div>
      <div className="item">
        <label>운동종목 : </label>
        <div> {title}</div>
      </div>
      <div className="item">
        <label>무게 : </label>
        <div>{weight}</div>
      </div>
      <div className="item">
        <label>횟수 : </label>
        <div>{count}</div>
      </div>
      <div className="item">
        <label>세트 수 : </label>
        <div>{set}</div>
      </div>
      <div className="item">
        <label>소모 칼로리 : </label>
        <div>{calorie}</div>
      </div>
      <div className="item">
        <label>운동기록 : </label>
        <div>{content}</div>
      </div>
      <div>
        <img className="img" src={previewUrl} alt="미리보기"></img> {/* 이미지 표시할 칸 테스트 (진섭) */}
      </div>
      <div className="Butten_div">
        <Button text="수정하기" type="positive" onClick={goEdit}/>
        <Button text="삭제하기" type="negative" onClick={onClickDelete}/>
      </div>
    </div>
  );
};

export default Detail;
