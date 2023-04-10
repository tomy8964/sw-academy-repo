import { useRecoilValue } from 'recoil';
import { surveyListState } from '../../../contexts/atom';

import ViewSurveyChoice from './ViewSurveyChoice';
import ViewSureveyQuestion from './ViewSurveyQuestion';
import ViewSurveyMultipleChoice from './ViewSurveyMultipleChoice';

function ViewSurvey(props) {
    const surveyList = useRecoilValue(surveyListState);

    return (
        <>
            <div className="create_survey">
                {
                    surveyList.content[props.index].categoryId === 0 ? <ViewSureveyQuestion key={props.index} index={props.index} /> :
                        surveyList.content[props.index].categoryId === 1 ? <ViewSurveyChoice key={props.index} index={props.index} /> :
                            <ViewSurveyMultipleChoice key={props.index} index={props.index} />
                }
            </div>
        </>
    );
}

export default ViewSurvey;