import { useRecoilState } from 'recoil';
import { surveyListState } from '../../../contexts/atom';
import { updateSurveyContent } from '../../../utils/updateJSON';

function MultipleChoiceOption(props) {
    const [surveyList, setSurveyList] = useRecoilState(surveyListState);

    const surveyId = props.id;
    const surveyIndex = props.index;

    function onClickDeleteButton(e) {
        e.preventDefault();
        var deletedContent = surveyList.content[surveyIndex].content.filter((choice) => choice.id !== props.choiceId);
        if (deletedContent.length === 0) deletedContent = "";
        setSurveyList((prev) => {
            let newContent = {
                problemId : surveyId,
                categoryId : prev.content[surveyIndex].categoryId,
                problemTitle : prev.content[surveyIndex].problemTitle,
                content : deletedContent
            };
            return updateSurveyContent(prev, newContent, surveyIndex);
        });
        console.log(surveyList);
    }

    function onChangeOption(e) {
        e.preventDefault();
        const options = surveyList.content[surveyIndex].content.map((option) =>{
            if(option.id === props.choiceId){
                return {
                    id : option.id,
                    content : e.target.value
                }
            }else{
                return option;
            }
        });
        setSurveyList((prev) => {
            let newContent = {
                problemId : surveyId,
                categoryId : prev.content[surveyIndex].categoryId,
                problemTitle : prev.content[surveyIndex].problemTitle,
                content : options
            };
            return updateSurveyContent(prev, newContent, surveyIndex);
        });
        console.log(surveyList);
    };



    return (
        <div className="small_button_container">
            <div className="small_button" onClick={(e) => onClickDeleteButton(e)}>
                <h1>-</h1>
            </div>
            <input placeholder="선택지 내용을 입력해 주세요" value={surveyList.content[surveyIndex].content[props.choiceIndex].content} className="choice_input" onChange={(e) => onChangeOption(e)} />
        </div>
    );
};

export default MultipleChoiceOption;