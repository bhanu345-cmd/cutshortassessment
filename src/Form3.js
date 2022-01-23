import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
function Form3(props){
    const state=useSelector((state)=>state);
    const dispatch=useDispatch();
    const onPlanClick=(planType)=>{
        dispatch({type:"updateProp",propType:"plan",propValue:planType});
    }
    return(
        <div className={`custom-card ${state.activeForm===3?"active":""}`}>
            <h1>How are you planning to use Eden</h1>
            <p>We will streamline you setup experience accordingly.</p>
            <div className="Form">
                <div className="Form3-flex mb-3">
                    <div className={`Form3-flex-col ${state.plan==""||state.plan==undefined?"active":state.plan=="formyself"?"active":""}`} value="formyself" onClick={onPlanClick.bind(null,"formyself")}>
                        <i className="fa fa-user mb-3"></i>
                        <h1>For myself</h1>
                        <p>Write better.Think more clearly.Stay organized.</p>
                    </div>
                    <div className={`Form3-flex-col ${state.plan=="team"?"active":""}`} value="team" onClick={onPlanClick.bind(null,"team")}>
                        <i className="fas fa-users mb-3"></i>
                        <h1>With my team</h1>
                        <p>Wikis,docs,tasks and projects all in one place.</p>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={props.onNext}>Create workspace</button>
            </div>
        </div>
    )
}
export default Form3;