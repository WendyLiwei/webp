import logo from './logo.svg';
import './App.css';

function App(props) {
  const multiButton=()=>{
    var output=[];
    for(let i=1;i<11;i++)
      output.push(<button onClick={changeText}>第{i}個按鍵</button>)
    return output;
  }
  const changeText=(event)=>{
    event.target.innerText=event.target.innerText+'被點了'
  }
  return (
  <div className='App'>
    {multiButton()}
  </div>
  );
}

export default App;
