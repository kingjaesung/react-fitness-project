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
const day1 = String(today.getDate()).padStart(2, "0");
const day2 = String(today.getDate() + 1).padStart(2, "0");
const day3 = String(today.getDate() + 2).padStart(2, "0");

const formattedDate1 = `${year}-${month}-${day1}`;
const formattedDate2 = `${year}-${month}-${day2}`;
const formattedDate3 = `${year}-${month}-${day3}`;

const mokData = [
  {
    no: 0,
    title: "벤치프레스",
    weight: 60,
    set: 5,
    count: 12,
    date: formattedDate1,
    calorie: 240,
    content: "test1",
    previewUrl: "https://www.k-health.com/news/photo/202310/67751_74220_4433.jpg"
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
    previewUrl: "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5796681139/B.jpg?692000000"
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
    previewUrl: "https://www.tradeinn.com/f/13756/137567759/softee-%EC%82%BC%EB%91%90%EA%B7%BC-%EB%94%A5%EC%8A%A4.webp"
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

  const onCreate = ({title, weight, set, count, date, content, previewUrl}) => { //객체 형태로 변경 {} 추가 (진섭)
    const calorie = set * count * 0.5;
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
        previewUrl,//url값 전달위해 추가(진섭)
      },
    });
    noRef.current += 1;
  };

  const onUpdate = ({no, title, weight, set, count, date , content, previewUrl}) => { //객체 형태로 변경 {} 추가 (진섭)
    console.log("dispatch 호출 전", { no, title, weight, set, count, date, content, previewUrl});
    const calorie = set * count * 0.5;
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
        previewUrl, //url값 전달위해 추가(진섭)
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