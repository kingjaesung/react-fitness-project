import"./Button.css";

const Button = ({onClick, text, type="default"}) => {
    const btnType = ["positive", "negative"].includes(type) ? type: "default";

    return (
        <div>
        <button 
            onClick={onClick} 
            className={["Button", `Button_${btnType}`].join(" ")}>
            {text}
        </button>
        </div>
    );
};

export default Button;