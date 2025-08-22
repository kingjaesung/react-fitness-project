import "./Detail.css";

const Detail = ({ title, weight, set, count, date, calorie }) => {
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
    </div>
  );
};

export default Detail;
