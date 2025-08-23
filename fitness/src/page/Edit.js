import { useContext, useState } from "react";
import Update from "../component/Update";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import { FitnessDispatchContext, FitnessStateContext } from "../App";
import Editor from "../component/Editor";

const Edit = () => {
  const navigate = useNavigate();
  const { no } = useParams();
  const data = useContext(FitnessStateContext);
  const { onUpdate } = useContext(FitnessDispatchContext);

  const eItem = data.find((it) => String(it.no) === no);

  

  const goBack = () => {
    navigate(-1);
  };

  

  const clickOnUpdate = (eItem) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      const { date, no, weight, title, count, set, content, previewUrl} = eItem; //prviewUrl 추가
      console.log("edit에서 update 함수 호출시 값 "+date, no, weight, title, count, set,  content, previewUrl);
      onUpdate({no, title, weight, set, count, date,  content, previewUrl}); //객체형태로 수정(진섭)
      navigate("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"상세운동 수정"}      
      />

      <Editor  initData={eItem} onSubmit={clickOnUpdate}/>

    </div>
  );
};

export default Edit;
