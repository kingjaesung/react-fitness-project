<<<<<<< HEAD
import"./Button.css";

const Button = ({onClick, text, type="default"}) => {
=======
import "./Button.css";

const Button = ({onClick, text, type}) => {
>>>>>>> 06381d9010bdf6cea9fc751008521054aab2403a
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