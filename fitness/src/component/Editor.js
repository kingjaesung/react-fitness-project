import "./Editor.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

<<<<<<< HEAD
const Editor = ({ initData, onSubmit, handleOnChange }) => {
  const navigate = useNavigate();
=======
const Editor = () => {
    const navigate = useNavigate();
    const [previewUrl, setPreviewUrl] = useState(null);
>>>>>>> 8b040ed5ea573b3ec8cb2c180657507d408a6fbc

  const handleGoBack = () => navigate(-1);

<<<<<<< HEAD
  const { date, no, weight, title, count, set, calorie } = initData;
=======
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewUrl(imageUrl);
        }
    };

    return (
        <div className="Editor">
            {/* 날짜 */}
            <div className="editor_section">
                <h4>날짜 입력📆</h4>
                <div className="input_wrapper">
                    <input type="date" />
                </div>
            </div>

            {/* 사진 */}
            <div className="editor_section">
                <h4>운동 사진🖼️</h4>
                <div className="imgOutter">
                    <div className='imgArea'>
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
>>>>>>> 8b040ed5ea573b3ec8cb2c180657507d408a6fbc

    return(
        <div>
            {/* 운동 루틴 */}
            <div className="editor_section">
                <h4>운동 루틴 기록✏️</h4>
                <div className="input_wrapper">
                    <div className='titleInputDiv'>
                        <label>제목</label>
                        <input type='text' />
                    </div>
                      <div className="editor_section">
        <h4>날짜 입력📆</h4>
        <div className="input_wrapper">
          <input
            type="date"
            name="date"
            value={date}
            onChange={handleOnChange}
          />
        </div>
      </div>

      {/* 사진 */}
      <div className="editor_section">
        <h4>운동 사진🖼️</h4>
        <div className="imgOutter">
          <div className="imgArea">
            <span>사진 없음</span>
          </div>
          <input type="file" accept="image/*" />
        </div>
      </div>

      {/* 운동 루틴 */}
      <div className="editor_section">
        <h4>운동 루틴 기록✏️</h4>
        <div className="input_wrapper">
          <div className="numberInputDiv">
            <label>
              무게
              <input
                type="number"
                name="weight"
                value={weight}
                onChange={handleOnChange}
              />
              Kg
            </label>
            <label>
              세트
              <input 
              type="number" 
              name="set" 
              value={set}
              onChange={handleOnChange}
              />
            </label>
            <label>
              반복횟수
              <input 
              type="number" 
              name="count"
              value={count}
              onChange={handleOnChange}
              />
            </label>
          </div>
          <div className="numberInputDiv">
            <label>
              칼로리 소모량 <input type="text" value={calorie} readOnly />
            </label>
          </div>
          <textarea placeholder="오늘 운동 기록" />
        </div>
      </div>

    

      {/* 버튼 */}
      <div className="editor_section bottom_section">
        <Button text={"취소"} onClick={handleGoBack} />
        <Button text={"작성 완료"} type={"positive"} onClick={onSubmit} />
      </div>
    </div>

)

export default Editor;
