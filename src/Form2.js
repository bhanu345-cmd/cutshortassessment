import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
function Form2(props){
    const state=useSelector((state)=>state);
    const dispatch=useDispatch();
    const onChange=(e)=>{
       dispatch({type:"updateProp",propType:e.target.name,propValue:e.target.value});
    }
    return(
        <div className={`custom-card ${state.activeForm===2?"active":""}`}>
            <h1>Lets setup a home for all your work</h1>
            <p>You can always create another workspace later.</p>
            <div className="Form">
                <div className="form-group">
                    <label >Workspace Name</label>
                    <input type="text" placeholder="Eden" className="form-control" value={state.workspacename?state.workspacename:""}name="workspacename" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label >Workspace URL (optional)</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">www.eden.com/</div>
                        </div>
                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Example" name="workspaceurl" onChange={onChange} value={state.workspaceurl?state.workspaceurl:""}/>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={props.onNext}>Create workspace</button>
            </div>
        </div>
    )
}
export default Form2;