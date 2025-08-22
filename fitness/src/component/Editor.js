import "./Editor.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Editor = ({ initData, onSubmit }) => {
  const [state, setState] = useState({
    title: "",
    weight: 0,
    set: 0,
    count: 0,
    date: "",
    calorie: 0,
    content: "",
  });
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleOnSubmit = () => {
    console.log(typeof onSubmit);
    if (onSubmit) {
      onSubmit(state);
    }
  };

  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
      });
    }
  }, [initData]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }
  };

  const handleGoBack = () => navigate(-1);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="Editor">
      {/* 날짜 */}
      <div className="editor_section">
        <h4>날짜 입력📆</h4>
        <div className="input_wrapper">
          <input 
          type="date"
          name="date"
          value={state.date}
          onChange={handleChange}
          />
        </div>
      </div>

      {/* 사진 */}
      <div className="editor_section">
        <h4>운동 사진🖼️</h4>
        <div className="imgOutter">
          <div className="imgArea">
            <span>
              {previewUrl ? (
                <img src={previewUrl} alt="미리보기" />
              ) : (
                <p>사진을 추가하세요</p>
              )}
            </span>
          </div>
          <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange}
           />
        </div>
      </div>

      {/* 운동 루틴 */}
      <div className="editor_section">
        <h4>운동 루틴 기록✏️</h4>
        <div className="input_wrapper">
          <div className="titleInputDiv">
            <label>제목</label>
            <input
              type="text"
              name="title"
              value={state.title}
              onChange={handleChange}
            />
          </div>
          <div className="numberInputDiv">
            <label>무게(단위:Kg)</label>
            <input
              type="number"
              name="weight"
              value={state.weight}
              onChange={handleChange}
            />
            <label>세트</label>
            <input
              type="number"
              name="set"
              value={state.set}
              onChange={handleChange}
            />
            <label>반복횟수</label>
            <input
              type="number"
              name="count"
              value={state.count}
              onChange={handleChange}
            />
          </div>
          <div className="calInputDiv">
            <label>칼로리 소모량</label>
            <input 
            type="text" 
            value={state.calorie} 
            readOnly 
            />
          </div>
          <textarea placeholder="오늘 운동 기록" />
        </div>
      </div>

      {/* 버튼 */}
      <div className="editor_section bottom_section">
        <Button text={"취소"} onClick={handleGoBack} />
        <Button text={"작성 완료"} type={"positive"} onClick={handleOnSubmit} />
      </div>
    </div>
  );
};

export default Editor;
