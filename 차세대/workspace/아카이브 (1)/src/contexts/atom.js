import { atom } from "recoil";

export const surveyListState = atom({
    key: "surveyListState",
    default: {  
                id:0,
                title:"",
                type:0,
                font:"",
                fontSize:10,
                layout:0,
                content:[   
                            {
                                problemId : 0,
                                categoryId : 0,
                                problemTitle:"",
                                content:""
                            }
                        ]
            }
});

export const answerListState = atom({
    key: "answerListState",
    default: {  
                id:0,
                responseId:0,
                content:[/*
                            {
                                id:0,
                                content:""
                            }*/
                        ]
            }
});

export const navbarState = atom({
    key: "navbarState",
    default: {  
                item : [],
                selected : 0
            }
});