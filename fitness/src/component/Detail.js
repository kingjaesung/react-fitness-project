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
    if (window.confirm("항목을 삭제할까요? 복구 안됩니다!")) {
      onDelete(no);
      navigate("/", { replace: true });
    } else {
      return;
    }
  };

  return (
  <div className="Detail_div">
    
    {/* 상단: 사진 + 요약정보 */}
    <div className="Detail_top">
      <img className="img" src={previewUrl} alt="운동 사진 미리보기" />
      
      <div className="Info_table">
        <label>운동일자:</label>  <div>{date}</div>
        <label>운동종목:</label>  <div>{title}</div>
        <label>무게:</label>      <div>{weight} kg</div>
        <label>횟수:</label>      <div>{count} 회</div>
        <label>세트 수:</label>   <div>{set} 세트</div>
        <label>소모 칼로리:</label> <div>{calorie} kcal</div>
      </div>
    </div>

    {/* 운동기록 */}
    <div className="Detail_record">
      <label>운동기록</label>
      <div>{content}</div>
    </div>

    {/* 버튼 */}
    <div className="Butten_div">
      <Button text="수정하기" type="positive" onClick={goEdit}/>
      <Button text="삭제하기" type="negative" onClick={onClickDelete}/>
    </div>
  </div>
);
};

export default Detail;
