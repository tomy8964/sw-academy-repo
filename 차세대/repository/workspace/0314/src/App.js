import './App.css';
import Comment from './Comment';
import LandingPage from './LandingPage'

const users = [
  {id:1, name: "Kimgacheon", comment: "안녕하세요. 김가천입니다."},
  {id:2, name: "CaCaOj", comment: "카카오제이입니다~!"},
  {id:3, name: "GaSoon", comment: "가순이입니다.파이팅!!"},
]

function App() {
  return (
    <div>
      <ul>
      {users.map((user)=><Comment key={user.id} name={user.name} comment={user.comment}/>)}
      </ul>
      <LandingPage />
    </div>
  );
}

export default App;
