import "./Editor.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



const Editor = ({ initData, onSubmit, selectDate }) => {
  const [state, setState] = useState({
    title: "",
    weight: 20,
    set: 1,
    count: 1,
    date: selectDate || "",
    calorie: 0,
    content: "",
  });

  const navigate = useNavigate();
  // URL 값입력 상태변수
  const [previewUrl, setPreviewUrl] = useState(null);
  // 사용자가 선택한 파일
  const [selectedFile, setSelectedFile] = useState(null);
  // 파일 미선택시 메시지 text
  const [message, setMessage] = useState("선택한 파일이 없을 시 기존 파일로 업데이트 됩니다");

  const handleOnSubmit = () => {
     console.log("handleOnSubmit called");
    if (onSubmit) {
      if (!previewUrl) {
        alert("사진을 추가하세요!");
        return;
      }
      if (!selectedFile) {
        setMessage("파일을 선택하지 않아 기존 파일로 업데이트 됩니다.");
      } else {
        setMessage("");
      }
      onSubmit({ ...state, previewUrl, selectedFile });
    }
  };


  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
      });
      if (initData.previewUrl) {
        setPreviewUrl(initData.previewUrl);
      }
    }
  }, [initData]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
      setSelectedFile(file);
      setMessage(""); // 파일 선택 시 메시지 초기화
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

  const contentHandleChange = (e) => {

    const value = e.target.value;

    setState({
      ...state,
      content: value
    })
  }

  console.log(state.content);
  console.log("파일 미선택 메시지"+ message);


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
            readOnly={!!selectDate}
          />
        </div>
      </div>

      {/* 사진 */}
      {/* 운동 사진 */}
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
          {message && (
            <p style={{ fontSize: "20px", color: "red", marginTop: "1px" }}>{message}</p>
          )}
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
              min={20}
              step={5}
            />
            <label>세트</label>
            <input
              type="number"
              name="set"
              value={state.set}
              onChange={handleChange}
              min={1}
            />
            <label>반복횟수</label>
            <input
              type="number"
              name="count"
              value={state.count}
              onChange={handleChange}
              step={5}
              min={1}
            />
          </div>
          <div className="calInputDiv">
            <label>칼로리 소모량</label>
            <input
              type="text"
              name="calorie"
              value={state.set * state.count * 0.8}
              readOnly
            />
          </div>
          <textarea
            placeholder="오늘 운동 기록"
            name="content"
            value={state.content}
            onChange={contentHandleChange}
          />
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
