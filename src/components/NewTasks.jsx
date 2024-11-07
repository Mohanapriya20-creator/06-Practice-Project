import { useState } from 'react';

export default function NewTasks( {onAdd} ) {

    const [enteredTask, setEnteredTask] = useState('');

    function addTaskHandler(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick(){
        if(enteredTask.trim().length === 0){
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
        <div className="flex items-center">
            <input className='w-64 px-2 rounded-sm bg-stone-200' type="text" onChange={addTaskHandler}></input>
            <button className="text-stone-700 hover:text-stone-950"
            onClick={handleClick}>Add Tasks</button>
        </div>
    )
}