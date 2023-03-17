import SurveyList from "./ui/SurveyList";

function Survey() {
  return (
    <div>
      <h1>설문 제작하기</h1>
      <p></p>
      <SurveyList />
    </div>
  );
}
export default Survey;

/**
 * input 태그 마다 이름 부여하기
 * button을 클릭하면 구분된 input value에 따라 json형태로 저장
 */