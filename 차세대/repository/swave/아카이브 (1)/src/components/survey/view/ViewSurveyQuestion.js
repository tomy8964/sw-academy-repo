import { useRecoilState, useRecoilValue } from 'recoil';
import { surveyListState } from '../../../contexts/atom';
import { answerListState } from '../../../contexts/atom';
import { updateAnswerContent } from '../../../utils/updateJSON';

function ViewSureveyQuestion(props) {
    const surveyList = useRecoilValue(surveyListState);
    const [anwserList, setAnwserList] = useRecoilState(answerListState);

    function onChangeInput(e) {
        e.preventDefault();
        setAnwserList((prev) => {
            let newContent = {
                id : anwserList.content[props.index].id,
                content : e.target.value
            }
            return updateAnswerContent(prev, newContent, props.index);
        });
    }

    return (
        <div className="problem_container" style={{ padding: "20px", marginBottom: "30px" }}>
            <h1 style={{ textAlign: "left" }}>{surveyList.content[props.index].problemTitle} </h1>
            <div className="small_button_container" style={{ marginTop: "20px", fontSize: "20px" }}>
                <input placeholder="답변을 입력해 주세요" onChange={(e) => onChangeInput(e)} className='survey_input'></input>
            </div>
        </div>
    );
}

export default ViewSureveyQuestion;