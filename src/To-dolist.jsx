import React,{useState} from "react";

function TodoList(){
    const [task,setTask]=useState([]);
    const [newTask,setNewtask]=useState();

    const HandleInput=(event)=>{
      setNewtask(event.target.value)
    }
    const AddTask=()=>{
        if (newTask.trim()!==""){
            setTask(t=>[...t,newTask])
            setNewtask("")
        }
       
    }
    const deleteTask = (index) => {
        const updatedTasks = task.filter((_, i) => i !== index);
        setTask(updatedTasks);
    };

    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    };
    const moveTaskDown = (index) => {
        if (index < task.length - 1) {
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    };
    return(
        <div className="container">
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input 
                type="text" placeholder="Enter a task.."
                value={newTask}
                onChange={HandleInput}/>
                <button className="add-button" onClick={AddTask}>Add</button>
            </div>
            <ol>
                {task.map((elem,index)=>
                 <li key={index}>
                    <span className="text">{elem}</span>
                    <button className="delete-button" onClick={()=>deleteTask(index)}>
                        Delete
                    </button>
                    <button className="move-button" onClick={()=>moveTaskUp(index)}>
                      ⬆
                    </button>
                    <button className="move-button" onClick={()=>moveTaskDown(index)}>
                     ⬇
                    </button>
                 </li>
                )}
            </ol>

        </div>
        </div>
    );
}
export default TodoList;