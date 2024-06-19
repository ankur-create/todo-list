import React, { useState } from 'react'

export default function ViewTask({ tasklist, setTaskList }) {
    const [editIndex, setEditIndex] = useState("");
    const [editedTask, setEditedTask] = useState("");

    const onClickEditTask = (indexToBeEdited) => {
        setEditIndex(indexToBeEdited);
        setEditedTask(tasklist[indexToBeEdited]);
    };
    const onSaveTask = (indexToBeEdited) => {
        const updatedTaskList = [...tasklist];
        updatedTaskList[indexToBeEdited] = editedTask;
        setTaskList(updatedTaskList);
        setEditIndex("")
    };
    const onClickDeleteTask = (indexToBeDeleted) => {
        const updatedTaskList = [...tasklist];
        updatedTaskList.splice(indexToBeDeleted, 1);
        setTaskList(updatedTaskList);
    };

    return (
        <div className='container mt-5'>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Sr.NO.</th>
                        <th scope="col">Task</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {tasklist.map((element, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        {editIndex === index ? (<td><input className='form-control' value={editedTask} onChange={(e) => setEditedTask(e.target.value)} /></td>)
                            : (<td>{element}</td>)}
                        {editIndex === index ? (<td><button className="btn btn-success" onClick={() => onSaveTask(index)}>Save Task</button></td>)
                            : (<td><button className="btn-primary" onClick={() => onClickEditTask(index)}>Edit Task</button></td>)}
                        <td><button className="btn btn-danger" onClick={() => onClickDeleteTask(index)}>Delete Task</button></td>
                    </tr>

                ))}
                <tbody>

                </tbody>
            </table>
        </div>
    )
}