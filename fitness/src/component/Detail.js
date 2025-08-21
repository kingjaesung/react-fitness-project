import "./Detail.css";

const Detail = ({ title, weight, set, count, date, calorie }) => {
    return (
        <div className={"Detail_div Detail"}>
            <div>{title}</div>
            <div>{weight}</div>
            <div>{set}</div>
            <div>{count}</div>
            <div>{date}</div>
            <div>{calorie}</div>
        </div>
    );
};

export default Detail;