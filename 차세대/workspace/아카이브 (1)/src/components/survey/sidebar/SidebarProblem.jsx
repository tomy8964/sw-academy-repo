import React from 'react';
import { useRecoilState } from "recoil";
import { surveyListState } from "../../../contexts/atom";
import { updateSurveyContent } from '../../../utils/updateJSON';

import styles from "../../../styles/sidebar.module.css";


function SidebarProblem(props) {
    const [surveyList, setSurveyList] = useRecoilState(surveyListState);

    const setOpen = props.setOpen;
    const index = props.index;

    const problem = surveyList.content[index];

    const list = ['주관식', '찬부식', '객관식'];

    function onClickTypeButton(e, typeId) {
        e.preventDefault();
        setSurveyList((prev) => {
            let newContent = {
                problemId: prev.content[index].problemId,
                categoryId: typeId,
                problemTitle: prev.content[index].problemTitle,
                content: ""
            };
            if (typeId === 2) newContent.content = [{ id: 0, content: "" }];
            return updateSurveyContent(prev, newContent, index);
        });
    }

    function onClickCopyButton(e) {
        e.preventDefault();
        setSurveyList((prev) => {
            const duplicatedProblem = {
                problemId: props.surveyId,
                categoryId: prev.content[index].categoryId,
                problemTitle: prev.content[index].problemTitle,
                content: prev.content[index].content
            };

            const newContent = [
                ...prev.content.slice(0, index),
                duplicatedProblem,
                ...prev.content.slice(index)
            ];

            return {
                id: prev.id,
                title: prev.title,
                type: prev.type,
                font: prev.font,
                fontSize: prev.fontSize,
                layout: prev.layout,
                content: newContent
            };
        });
        props.setSurveyId((prev) => { return prev + 1 });
    }

    function onClickDeleteButton(e) {
        e.preventDefault();
        setSurveyList((prev) => {
            const deletedContent = [
                ...prev.content.slice(0, index),
                ...prev.content.slice(index + 1)
            ];
            return {
                id: prev.id,
                title: prev.title,
                type: prev.type,
                font: prev.font,
                fontSize: prev.fontSize,
                layout: prev.layout,
                content: deletedContent
            };
        });
        setOpen({open: false, isSetting: false});
    }


    return (
        <div className={styles.container} >
            <div className={styles.sidebar} >
                <div className={styles.content}>
                    <h1>문항 제작</h1>
                    <hr style={{ border: "solid 0.5px #1b0278" }} />
                    <h4>질문 종류 선택</h4>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        {list.map((name, index) => {
                            return <button key={index} className={problem && index === problem.categoryId ? styles.setBtn_selected : styles.setBtn} style={{ width: "30%" }} onClick={(e) => { onClickTypeButton(e, index) }}>{name}</button>
                        })}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <button className={styles.setBtn} style={{ width: "100%" }} onClick={(e) => { onClickCopyButton(e) }}>질문 복사</button>
                        <button className={styles.setBtn} style={{ width: "100%" }} onClick={(e) => { onClickDeleteButton(e) }}>질문 삭제</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidebarProblem;