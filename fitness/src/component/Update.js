import Header from "./Header";
import Button from "./Button";
import { useState } from "react";

const Update = ({data}) => {
    const onClick = () =>{
        //submit();
    }

    return (
        <div className="update">
            <Header />
            <div>
                <div> title
                    <input type="text" class="km"></input>
                </div>
                <div> content
                    <input type="text" class="pace"></input>
                </div>
                <div> weight
                    <input type="text" class="time"></input>
                </div>
                <div>set
                    <input type="text" class="kall"></input>
                </div>
                <div>count
                    <input type="text" class="kall"></input>
                </div>
                <div>data
                    <input type="text" class="kall"></input>
                </div>
                <div>calorie
                    <input type="text" class="kall"></input>
                </div>
            </div>
            <Button text="수정하기" type="default" onClick={onClick}/>        
        </div>
    );
};

export default Update;