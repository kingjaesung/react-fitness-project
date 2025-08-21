import "./Detail.css";

const Detail = ({title, weight, set, count, date, calorie}) => {
    return (
        <div>
            {title}<br />
            {weight}<br />
            {set}<br />
            {count}<br />
            {date}<br />
            {calorie}<br />
        </div>
    );
};

export default Detail;