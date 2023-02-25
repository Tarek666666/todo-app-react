import TodoItem  from './todoItem'
import { MdDeleteForever } from "react-icons/md";



function TodoList({todos , handleDeleteItem , handleDeleteAll , handelEditTask}) {

  return (
       
        <div className='list-container'>
            <div className='list-items-container'>
                {todos.map((todo , index) => {
                    return <TodoItem key={todo.id} todo={todo} index={index + 1} handleDeleteItem={handleDeleteItem} handelEditTask={handelEditTask}/>
                })}
            </div>
            {todos.length > 0 && <button onClick={handleDeleteAll} className='delete-all-btn'><MdDeleteForever size={25}/> Delete All</button>}  
        </div>
    );
}

export default TodoList;