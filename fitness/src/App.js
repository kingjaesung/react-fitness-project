import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import New from "./page/New";
import Edit from "./page/Edit";
import Exercise from "./page/Exercise";
import React, { useContext, useRef, useState } from "react";

export const ExerciseStateContext = React.createContext();

function App() {
  const today = new Date();
  const noRef = useRef(3);

  const year = today.getFullYear(); // 연도 (4자리)
  const month = String(today.getMonth() + 1).padStart(2, "0"); // 월 (1~12, 2자리로 맞춤)
  const day = String(today.getDate()).padStart(2, "0"); // 일 (2자리로 맞춤)

  const formattedDate = `${year}-${month}-${day}`;

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

  const [data, setData] = useState(mokData);

  return (
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
  );
}

export default App;
