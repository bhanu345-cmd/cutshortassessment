import React from 'react';
import{useDispatch,useSelector} from 'react-redux';
function Form1(props){
    const state=useSelector((state)=>state);
    const dispatch=useDispatch();
    const onChange=(e)=>{
       dispatch({type:"updateProp",propType:e.target.name,propValue:e.target.value});
    }
    return(
        <div className={`custom-card ${state.activeForm===1?"active":""}`}>
            <h1>Welcome! first things first...</h1>
            <p>You can always change them later.</p>
            <div className="Form">
                <div className="form-group">
                <label >FullName</label>
                <input type="text" value={state.fullName?state.fullName:""} placeholder="steve jobs" className="form-control" name="fullName" onChange={onChange}/>
                </div>
                <div className="form-group">
                <label >DisplayName</label>
                <input type="text" placeholder="steve" value={state.displayName?state.displayName:""} className="form-control" name="displayName" onChange={onChange}/>
                </div>
                <button className="btn btn-primary" onClick={props.onNext}>Create workspace</button>
            </div>
        </div>
    )
}
export default Form1;