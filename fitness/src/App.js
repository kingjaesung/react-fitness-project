import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import New from "./page/New";
import Edit from "./page/Edit";
import Exercise from "./page/Exercise";
import React, { useState, useReducer, useEffect, useRef } from "react";

const today = new Date(); 

const year = today.getFullYear(); // 연도 (4자리)
const month = String(today.getMonth() + 1).padStart(2, "0"); // 월 (1~12, 2자리로 맞춤)
const day = String(today.getDate()).padStart(2, "0"); // 일 (2자리로 맞춤)

const formattedDate = `${year}-${month}-${day}`;

const mokData = [
  {
    no: 0,
    title: "밴체프레스",
    weight: 60,
    set: 5,
    count: 12,
    date: formattedDate,
    calorie: 50,
  },
  {
    no: 1,
    title: "인클라인 벤치프레스",
    weight: 60,
    set: 5,
    count: 12,
    date: formattedDate,
    calorie: 50,
  },
  {
    no: 2,
    title: "딥스",
    weight: 60,
    set: 5,
    count: 12,
    date: formattedDate,
    calorie: 50,
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

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {

  const [data, dispatch] = useReducer(reducer, []);
  const noRef = useRef(3);


  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mokData,
    });
  }, []);

  const onCreate = (title, weight, set, count, date, calorie) => {
    dispatch({
      type:"CREATE",
      data:{
        no: noRef.current,
        title,
        weight,
        set,
        count,
        data: formattedDate,
        calorie,
      },
    });
    noRef.current += 1;
  };

  const onUpdate = (no, title, weight, set, count, date ,calorie) => {
    console.log("dispatch 호출 전", { no, title, weight, set, count, date, calorie });
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
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onUpdate,
          onDelete
        }}
      >
        <div>
          <Routes>
            <Route path="/" element={<Home date={formattedDate}/>} />
            <Route path="/New" element={<New />} />
            <Route path="/Edit/:no" element={<Edit />} />
            <Route path="/exercise/:no" element={<Exercise />} /> 
          </Routes>
        </div>
      </DiaryDispatchContext.Provider>  
    </DiaryStateContext.Provider>
  );
}

export default App;