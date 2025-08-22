import Header from "../component/Header";
import Button from "../component/Button";
import Detail from "../component/Detail";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FitnessDispatchContext, FitnessStateContext } from "../App";

const Exercise = () => {
  const data = useContext(FitnessStateContext);
  const { onDelete } = useContext(FitnessDispatchContext);

  const navigate = useNavigate();

  const { no } = useParams();

  const target = data.find((it) => String(it.no) === no);

  if (!target) {
    return <div>존재하지 않는 항목입니다.</div>;
  }

  const goEdit = () => {
    navigate(`/edit/${target.no}`, { state: { target } });
  };

<<<<<<< HEAD
    const onClickDelete = () =>{
        if(window.confirm("항목을 삭제할까요? 복구 안됩니다!"));
        onDelete(target.no);
        navigate("/",{replace:true });
    }
  
    return(
        <div>
            <Header 
                left={<Button text="수정하기" type="positive" onClick={goEdit}/>}
                title={target.title}
                right={<Button text="삭제하기" type="negative" onClick={onClickDelete}/>}
            />
            <Detail
                title={target.title}
                weight={target.weight}
                set={target.set}
                count={target.count}
                date={target.date}
                calorie={target.calorie}
                content={target.content}
            />
        </div> 
    )
}
=======
  const onClickDelete = () => {
    if (window.confirm("항목을 삭제할까요? 복구 안됩니다!"));
    onDelete(target.no);
    navigate("/", { replace: true });
  };
>>>>>>> 2fa7cf142806d4b449738e08ef5ff3eb0333d5ac

  return (
    <div>
      <Header
        left={<Button text="수정하기" type="positive" onClick={goEdit} />}
        title={target.title}
        right={
          <Button text="삭제하기" type="negative" onClick={onClickDelete} />
        }
      />
      <Detail
        title={target.title}
        weight={target.weight}
        set={target.set}
        count={target.count}
        date={target.date}
        calorie={target.calorie}
      />
    </div>
  );
};

export default Exercise;
