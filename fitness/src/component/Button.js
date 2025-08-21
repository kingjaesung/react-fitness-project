const Button = ({onClick, text, type="default"}) => {
    const btnType = ["positive", "negative"].includes(type) ? type: "default";

    return (
        <button type="button" onClick={onClick} className={["Button", `Button_${btnType}`].join(" ")}>
            {text}
        </button>
    );
};

export default Button