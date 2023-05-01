import { useRecoilState } from 'recoil';
import { surveyListState } from '../../../contexts/atom';
import { updateSurveyContent } from '../../../utils/updateJSON';

function SurveyChoice(props) {
    const [surveyList, setSurveyList] = useRecoilState(surveyListState);

    const surveyId = props.id;
    const surveyIndex = props.index;

    function onChangeInput(e) {
        e.preventDefault();
        setSurveyList((prev) => {
            let newContent = {
                problemId : surveyId,
                problemType : prev.content[surveyIndex].problemType,
                problemTitle : e.target.value,
                content : ""
            };
            return updateSurveyContent(prev,newContent,surveyIndex);
        });
    }

    return (
        <div>
            <div className="problem_container">
                <input placeholder="제목을 입력해 주세요" value={surveyList.content[surveyIndex].problemTitle} className='survey_input' onChange={(e) => onChangeInput(e)}></input>
            </div>
            <div className="small_button_container">
                <h2 className="grey_text">예 / 아니오</h2>
            </div>
        </div>
    );
}

export default SurveyChoice;
