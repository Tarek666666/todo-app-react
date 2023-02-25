import { IoMdAddCircle } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
function TodoFrom({handleAddTask , handleTaskInputChange , handleTaskTo , newTask ,newTo , edit}) {  
  
    return (
              
               <form className='todo-Form' onSubmit={handleAddTask}>   
                      <div className="input-container">
                            
                            <input value={newTask} name="todo" type='text' onChange={handleTaskInputChange}  className='user-input' placeholder="e.g  cleaning the kitchen"  ></input>
                           
                            <select value={newTo} name="importance" className="employees-container" onChange={handleTaskTo}  >
                                        <option value="none"   >importance</option>
                                            <option  value="Very-High">Very High</option>
                                            <option  value="High">High</option>
                                            <option value="Medium">Medium</option>
                                            <option  value="Low">Low</option>
                            </select>
                            
                      </div>
                     {edit ?  <button type="submit" className="add-btn edit-submit" > <AiFillEdit size={'22px'}/> Edit  </button> :  <button type="submit" className="add-btn" > <IoMdAddCircle size={'22px'}/> Add  </button> }
               </form>
      
      );
   
  }
  
  export default TodoFrom;