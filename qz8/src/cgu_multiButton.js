const styleArgument ={fontSize:'100px',color:'red'};

const multiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;i++)
      output.push(<button onClick={changeText}>第{i}個按鍵</button>)
    return output;
}
const changeText=(event)=>{
    event.target.innerText=event.target.innerText+'被點了'
}

export default multiButton;