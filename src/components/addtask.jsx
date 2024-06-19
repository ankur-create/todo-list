import { useState } from "react";

export default function Addtask({tasklist,setTaskList}) {
    let [task, setTask] = useState('');
    const onChangeTaskName = (taskname) => {
        setTask(taskname);
    };
const onClickTasklistAdd=()=>{
    setTaskList([...tasklist,task]);
    setTask('');
}
// console.log(tasklist,"tasklist")
    return (
        <div className="d-flex gap-3 mt-3">
            <input className="form-control w-75 mx-2"  value={task} onChange={(e)=>onChangeTaskName(e.target.value) } placeholder="Add Your Task Here" />
            <button className="btn btn-primary" onClick={onClickTasklistAdd} >AddTask</button>
        </div>
    );

}