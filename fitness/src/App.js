import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import New from "./page/New";
import Edit from "./page/Edit";
import Exercise from "./page/Exercise";
import React, { useReducer, useEffect, useRef } from "react";

const today = new Date(); 

const year = today.getFullYear(); // 연도 (4자리)
const month = String(today.getMonth() + 1).padStart(2, "0"); // 월 (1~12, 2자리로 맞춤)
//const day = String(today.getDate()).padStart(2, "0"); // 일 (2자리로 맞춤)
const day1 = String(today.getDate()).padStart(2, "0");
const day2 = String(today.getDate() + 1).padStart(2, "0");
const day3 = String(today.getDate() + 2).padStart(2, "0");

//const formattedDate = `${year}-${month}-${day}`;
const formattedDate1 = `${year}-${month}-${day1}`;
const formattedDate2 = `${year}-${month}-${day2}`;
const formattedDate3 = `${year}-${month}-${day3}`;

const mokData = [
  {
    no: 0,
    title: "밴체프레스",
    weight: 60,
    set: 5,
    count: 12,
    date: formattedDate1,
    calorie: 240,
    content: "test1",
  },
  {
    no: 1,
    title: "인클라인 벤치프레스",
    weight: 60,
    set: 5,
    count: 12,
    date: formattedDate2,
    calorie: 240,
    content: "test2",
  },
  {
    no: 2,
    title: "딥스",
    weight: 60,
    set: 5,
    count: 12,
    date: formattedDate3,
    calorie: 240,
    content: "test2",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((it)=> String(it.no) === String(action.data.no) ? {...action.data} : it);      
    }
    default: {
    return state;
    }
    case "DELETE" : {
      return state.filter((it) => String(it.no) !== String(action.targetNo));
    }
  }
}

export const FitnessStateContext = React.createContext();
export const FitnessDispatchContext = React.createContext();

function App() {

  const [data, dispatch] = useReducer(reducer, []);
  const noRef = useRef(3);


  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mokData,
    });
  }, []);

  const onCreate = (title, weight, set, count, date, content) => {
    const calorie = set * count * 8;
    dispatch({
      type:"CREATE",
      data:{
        no: noRef.current,
        title,
        weight,
        set,
        count,
        date,
        calorie,
        content,
      },
    });
    noRef.current += 1;
  };

  const onUpdate = (no, title, weight, set, count, date, content) => {
    console.log("dispatch 호출 전", { no, title, weight, set, count, date, content});
    const calorie = set * count * 8;
    dispatch({
      type: "UPDATE",
      data: {
        no,
        title,
        weight,
        set,
        count,
        date,
        calorie,
        content,
      },
    });
  };

  const onDelete = (targetNo) => {
    dispatch({
      type : "DELETE",
      targetNo,
    })
  }

  return (
    <FitnessStateContext.Provider value={data}>
      <FitnessDispatchContext.Provider
        value={{
          onCreate,
          onUpdate,
          onDelete
        }}
      >
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/New" element={<New />} />
            <Route path="/Edit/:no" element={<Edit />} />
            <Route path="/exercise/:no" element={<Exercise />} /> 
          </Routes>
        </div>
      </FitnessDispatchContext.Provider>  
    </FitnessStateContext.Provider>
  );
}

export default App;