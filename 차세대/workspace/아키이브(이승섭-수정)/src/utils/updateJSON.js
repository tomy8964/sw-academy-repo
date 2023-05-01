export function updateSurveyContent(json, newContent, indexToUpdate) {
    return {
        id : json.id,
        title : json.title,
        description : json.description,
        type : json.type,
        design : json.design,
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