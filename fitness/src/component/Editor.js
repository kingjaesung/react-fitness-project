import './Editor.css';
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Editor = () => {
    const navigate = useNavigate();

    const handleGoBack = () => navigate(-1);

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
                        <span>사진 없음</span>
                    </div>
                    <input type="file" accept="image/*" />
                </div>
            </div>

            {/* 운동 루틴 */}
            <div className="editor_section">
                <h4>운동 루틴 기록✏️</h4>
                <div className="input_wrapper">
                    <div className='titleInputDiv'>
                        <label>제목</label>
                        <input type='text'></input>
                    </div>
                    <div className='numberInputDiv'>
                        <label>무게(단위:Kg)</label>
                        <input type='number' />
                        <label>세트</label>
                        <input type='number' />
                        <label>반복횟수</label>
                        <input type='number' />
                    </div>
                    <div className='calInputDiv'>
                        <label>칼로리 소모량</label>
                        <input type='text' readOnly />
                    </div>
                    <textarea placeholder="오늘 운동 기록" />
                </div>
            </div>

            {/* 버튼 */}
            <div className="editor_section bottom_section">
                <Button text={"취소"} onClick={handleGoBack} />
                <Button text={"작성 완료"} type={"positive"} />
            </div>
        </div>
    );
};

export default Editor;
