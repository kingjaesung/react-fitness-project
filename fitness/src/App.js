import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import New from "./page/New";
import Edit from "./page/Edit";
import Exercise from "./page/Exercise";
<<<<<<< HEAD
import React, { useContext, useRef, useState } from "react";

export const ExerciseStateContext = React.createContext();

function App() {
  const today = new Date();
  const noRef = useRef(3);
=======
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
      return state.map((it)=> String(it.no) === String(action.data.id) ? {...action.data} : it);      }
    default: {
    return state;
    }
  }
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
>>>>>>> a8718529cc26739df9fb8638e5167751d4e04ed7

  const [data, dispatch] = useReducer(reducer, []);
  const noRef = useRef(3);

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mokData,
    });
  }, []);

<<<<<<< HEAD
  const [form, setForm] = useState({
    no: noRef + 1,
    title: "",
    weight: 0,
    set: 0,
    count: 0,
    date: 0,
    calorie: 0,
  });

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
=======
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

  const onUpdate = (targetNo, title, weight, set, count, date, calorie) => {
    dispatch({
      type: "UPDATE",
      data: {
        no: targetNo,
        title,
        weight,
        set,
        count,
        date: formattedDate,
        calorie,
      },
    });
  };
>>>>>>> a8718529cc26739df9fb8638e5167751d4e04ed7

  const [data, setData] = useState(mokData);

  return (
<<<<<<< HEAD
    <ExerciseStateContext value={data}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/New/" element={<New />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="/exercise" element={<Exercise />} />
        </Routes>
      </div>
    </ExerciseStateContext>
=======
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onUpdate,
        }}
      >
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/New/:no" element={<New />} />
            <Route path="/Edit" element={<Edit />} />
            <Route path="/exercise" element={<Exercise />} /> 
          </Routes>
        </div>
      </DiaryDispatchContext.Provider>  
    </DiaryStateContext.Provider>
>>>>>>> a8718529cc26739df9fb8638e5167751d4e04ed7
  );
}

export default App;
