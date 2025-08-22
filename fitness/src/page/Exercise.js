import Header from "../component/Header";
import Button from "../component/Button";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FitnessDispatchContext, FitnessStateContext } from "../App";

const Exercise = () => {
  const data = useContext(FitnessStateContext);
  const { onDelete } = useContext(FitnessDispatchContext);

  const navigate = useNavigate();

  const { no } = useParams();

  const target = data.find((it) => String(it.no) === no);

  const goEdit = () => {
    navigate(`/edit/${target.no}`, { state: { target } });
  };

  const onClickDelete = () => {
    if (window.confirm("항목을 삭제할까요? 복구 안됩니다!")) {
      onDelete(target.no);
      navigate("/", { replace: true });
    }
  };

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
