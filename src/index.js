import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
const appReducer=(state={activeForm:1,Name:""},action)=>{
  if(action.type==="formChange"){
    return {...state,activeForm:state.activeForm+1};
  }else if(action.type==="formStatus"){
    return {...state,activeForm:action.payload}
  }else if(action.type==="updateProp"){
    return{...state,[action.propType]:action.propValue};
  }else{
    return state;
  }
}
const store=createStore(appReducer);
store.subscribe(()=>{
  console.log(store.getState());
})
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://urldefense.com/v3/__https://bit.ly/CRA-vitals__;!!H9nueQsQ!rtt0gkKgOG37yDTFItmbS7cCWI-ghj8kQ4JLqvoyMydxXpMYkFXZANDkmACOES4TH9aEKK5P4ZI_$ 
reportWebVitals();
