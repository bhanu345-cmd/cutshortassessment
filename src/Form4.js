import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
function Form4(props){
    const state=useSelector((state)=>state);
    const dispatch=useDispatch();
    return(
        <div className={`custom-card ${state.activeForm===4?"active":""}`}>
            <div className="Form">
                <div className="Form4check">
                    <i className="fas fa-check" style={{borderRadius:"50%",fontSize:"36px",padding:"10px",display:"inline-block",backgroundColor:"#673AB7",color:'white'}}></i>
                </div>
                <h1>Congratulations, {state.displayName?state.displayName:"Eden"}!</h1>
                <p>You have completed onboarding process. You can start using Eden.</p>
                <button className="btn btn-primary">Create workspace</button>
            </div>
        </div>
    )
}
export default Form4;