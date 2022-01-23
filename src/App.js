import React from 'react';
import './App.css';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import {useDispatch,useSelector} from 'react-redux';
function App() {
  const state=useSelector((state)=>state);
  const dispatch=useDispatch();
  const onNextClick=()=>{
    dispatch({type:"formChange"});
  }
  const onFormStatusClick=(e)=>{
    dispatch({type:"formStatus",payload:parseInt(e.target.textContent)})
  }
  return (
    <div className="container justify-content-center">
      <div className="jumbotron mt-5 justify-content-center">
          <h1><span><i className=""></i></span>Eden</h1>
          <ul className="progressmenu">
            <li className={`one ${state.activeForm>=1?"active":""}`} onClick={onFormStatusClick}>1</li>
            <li className={`two ${state.activeForm>=2?"active":""}`} onClick={onFormStatusClick}>2</li>
            <li className={`three ${state.activeForm>=3?"active":""}`} onClick={onFormStatusClick}>3</li>
            <li className={`four ${state.activeForm>=4?"active":""}`} onClick={onFormStatusClick}>4</li>
          </ul>
          <Form1 onNext={onNextClick}/>
          <Form2 onNext={onNextClick}/>
          <Form3 onNext={onNextClick}/>
          <Form4 onNext={onNextClick}/>
      </div>
    </div>
  );
}

export default App;
