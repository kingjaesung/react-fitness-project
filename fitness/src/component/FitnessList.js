import './Fitness.css';

const FitnessList = () => {
    return(
        <div className={["list_main fitnessList"].join(" ")}>
            <div onClick={() => alert("클릭완료")}>
                1
            </div>
            <div>
                2
            </div>
            <div>
                3
            </div>
        </div>
    )
}


export default FitnessList;
