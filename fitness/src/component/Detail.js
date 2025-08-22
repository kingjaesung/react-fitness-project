import "./Detail.css";

<<<<<<< HEAD
const Detail = ({ title, weight, set, count, date, calorie, content }) => {
    return (
        <div className={"Detail_div Detail"}>
            <div>{title}</div>
            <div>{weight}</div>
            <div>{set}</div>
            <div>{count}</div>
            <div>{date}</div>
            <div>{calorie}</div>
            <div>{content}</div>
        </div>
    );
=======
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
>>>>>>> 2fa7cf142806d4b449738e08ef5ff3eb0333d5ac
};

export default Detail;
