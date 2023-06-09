import React, { useState, useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { surveyListState, answerListState } from '../contexts/atom';
import ReactDragList from 'react-drag-list';
import axios from 'axios';

import '../styles/SurveyStyle.css';
import CreateSurvey from '../components/survey/create/CreateSurvey';
import ViewSurvey from '../components/survey/view/ViewSurvey';
import Sidebar from '../components/survey/sidebar/Sidebar';

function Survey(props) {
    const [surveyId, setSurveyId] = useState(1);

    const [sidebarIsOpen, setSidebarIsOpen] = useState({ open: false, isSetting: false });
    const [sidebarSelected, setSidebarSelected] = useState(0);

    const [surveyList, setSurveyList] = useRecoilState(surveyListState);
    const [answerList, setAnswerList] = useRecoilState(answerListState);

    const [isPreview, setIsPreview] = useState(false);

    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }, [surveyList.content.length]);

    const onUpdateList = (e, updated) => {
        console.log(updated);
        setSurveyList((prev) => {
            return {
                id: prev.id,
                title: prev.title,
                type: prev.type,
                font: prev.font,
                fontSize: prev.fontSize,
                layout: prev.layout,
                content: [...updated]
            }
        }
        );
    };
    const dragList = (record, index) => (
        <CreateSurvey key={index} id={record.problemId} index={index} onClickEvent={onClickProblem} />
    );

    function onClickNewSurveyButton(e) {
        e.preventDefault();
        setSurveyList((prev) => {
            return {
                id: prev.id,
                title: prev.title,
                type: prev.type,
                font: prev.font,
                fontSize: prev.fontSize,
                layout: prev.layout,
                content: [
                    ...prev.content,
                    {
                        problemId: surveyId,
                        categoryId: 0,
                        problemTitle: "",
                        content: ""
                    }
                ]
            };
        });
        setSurveyId((prev) => { return prev + 1; });
        console.log(surveyList);
    }

    function onClickProblem(e, index) {
        e.preventDefault();
        setSidebarSelected(index);
        if (!sidebarIsOpen[0]) {
            setSidebarIsOpen({ open: true, isSetting: false });
        }
    }

    function onChangeTitleInput(e) {
        e.preventDefault();
        setSurveyList((prev) => {
            return {
                id: prev.id,
                title: { title: e.target.value, explain: prev.title && prev.title.explain },
                type: prev.type,
                font: prev.font,
                fontSize: prev.fontSize,
                layout: prev.layout,
                content: prev.content
            };
        });
    }

    function onChangeTextArea(e) {
        e.preventDefault();
        setSurveyList((prev) => {
            return {
                id: prev.id,
                title: { title: prev.title && prev.title.title, explain: e.target.value },
                type: prev.type,
                font: prev.font,
                fontSize: prev.fontSize,
                layout: prev.layout,
                content: prev.content
            };
        });

    }

    function onClickPreviewButton(e) {
        e.preventDefault();
        if (!isPreview) {
            surveyList.content.map((survey) => {
                let contentDefault = ""; // default 답변 주관식은 ""

                if (survey.categoryId === 1) contentDefault = true; //찬부식은 true
                else if (survey.categoryId === 2) contentDefault = 0; //객관식은 0

                setAnswerList((prev) => {
                    return {
                        id: prev.id,
                        responseId: prev.responseId,
                        content: [
                            ...prev.content,
                            {
                                id: survey.problemId,
                                content: contentDefault
                            }
                        ]
                    }
                });
                return null;
            })
        } else if (isPreview) {
            setAnswerList((prev) => {
                return {
                    id: prev.id,
                    responseId: prev.responseId,
                    content: []
                }
            });
        }
        setIsPreview((prev) => { return !prev; });
        setSidebarIsOpen({ open: false, isSetting: false });
    }

    function onClickSaveButton(e) {
        e.preventDefault();
        console.log(surveyList);
        console.log(answerList);
        axios.post('/api/create', surveyList,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((response) => {//api의 응답을 제대로 받은경우 
                console.log('Saved');
            })
            .catch((response) => {//종류불문 에러
                console.log('Error');
            });
    }

    return (
        <div>
            <div className="survey_area" style={!sidebarIsOpen.open ? { paddingRight: "0px" } : { paddingRight: "30vw" }}>
                <div className="survey_container">
                    <div ref={scrollRef}>
                        {!isPreview ? (
                            <>
                                <div className='create_survey'>
                                    <div className='problem_container'>
                                        <input placeholder="설문 제목" value={surveyList.title && surveyList.title.title} onChange={(e) => onChangeTitleInput(e)} className='survey_input' style={{ fontSize: "50px" }}></input>
                                        <textarea placeholder="부연 설명을 입력해 주세요" value={surveyList.title && surveyList.title.explain} onChange={(e) => onChangeTextArea(e)} className='textarea'></textarea>
                                    </div>
                                </div>
                                <ReactDragList dataSource={[...surveyList.content]} rowKey='problemId' row={dragList} handles={false} ghostClass="dragGhost" onUpdate={onUpdateList}
                                />
                            </>) : (
                            <>
                                <div className='create_survey'>
                                    <div className='problem_container'>
                                        <h1 style={{ textAlign: "left", margin: '0 0 0 0 ', fontSize: '50px' }}>{surveyList.title && surveyList.title.title}</h1>
                                        <textarea readOnly className='textarea'>{surveyList.title && surveyList.title.explain}</textarea>
                                    </div>
                                </div>
                                {surveyList.content.map((survey, index) => <ViewSurvey key={index} id={survey.problemId} index={index} />)}
                            </>
                        )
                        }
                        {!isPreview && (
                            <div className="new_survey" onClick={(e) => onClickNewSurveyButton(e)}>
                                <h1>+</h1>
                            </div>
                        )}
                        <div className='survey_contatiner_bottom'>
                            <div className="survey_button" onClick={(e) => onClickPreviewButton(e)}>{isPreview ? "Create" : "Preview"}</div>
                            <div className="survey_button" onClick={(e) => onClickSaveButton(e)}>Save</div>
                        </div>
                    </div>
                </div>
            </div>
            {!isPreview && <Sidebar isOpen={sidebarIsOpen} setOpen={setSidebarIsOpen} index={sidebarSelected} surveyId={surveyId} setSurveyId={setSurveyId} />}
        </div>
    );
}

export default Survey;