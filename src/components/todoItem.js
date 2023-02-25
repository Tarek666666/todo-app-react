import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";



function TodoItem({  todo , index  , handleDeleteItem , handelEditTask}) {
  
  
  

  return (
  
    <div className='list-item' key={todo.id}>  
            <div>{index} - </div>    
            <div className='task-display' > {todo.task}</div>
            <div className='person-display' > {todo.to} </div>
            <button className='edit-btn' onClick={()=>handelEditTask(todo.id)}><AiFillEdit size={18} /></button>
            <button className='delete-btn'  onClick={()=>handleDeleteItem(todo.id)}><MdDeleteForever size={20}/></button>
    </div>
    
    );
 
}

export default TodoItem;