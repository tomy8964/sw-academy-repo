export function updateSurveyContent(json, newContent, indexToUpdate) {
    return {
        id : json.id,
        title : json.title,
        type : json.type,
        font : json.font,
        fontSize:  json.fontSize,
        layout : json.layout,
        content : [
            ...json.content.slice(0, indexToUpdate),
            newContent,
            ...json.content.slice(indexToUpdate + 1)
        ]
    };
};

export function updateAnswerContent(json, newContent, indexToUpdate) {
    return {
        id: json.id,
        responseId : json.responseId,
        content : [
            ...json.content.slice(0, indexToUpdate),
            newContent,
            ...json.content.slice(indexToUpdate + 1)
        ]
    };
};