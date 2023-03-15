import TextSurvey from "./ui/TextSurvey";
import Button from "./ui/Button";
import CheckBoxList from "./ui/CheckBoxList";

function Survey() {
  const ageTitles = [
    {
        id:1,
        smallTitle:"10~20",
    },
    {
        id:2,
        smallTitle:"20~30",
    },
    {
        id:3,
        smallTitle:"30~40",
    },
    {
        id:4,
        smallTitle:"40~",
    },
  ]

  const countryTitles = [
    {
        id:1,
        smallTitle:"서울",
    },
    {
        id:2,
        smallTitle:"부산",
    },
    {
        id:3,
        smallTitle:"성남",
    },
    {
        id:4,
        smallTitle:"그 외",
    },
  ]
  return (
    <div>
      <h1>Survey</h1>
      <CheckBoxList headTitle="나이는?" titles={ageTitles}/>
      <CheckBoxList headTitle="사는 곳은?" titles={countryTitles}/>
      <TextSurvey title="건의 사항"/>
      <TextSurvey title="문의 사항"/>
      <Button />
    </div>
  );
}
export default Survey;