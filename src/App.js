import "./App.css";
import TodoFrom from "../src/components/todoFrom";
import TodoList from "../src/components/todoList";
import Alert from "../src/components/alert";
import { useState , useEffect } from "react";

function App() {
    const initialTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')):[];
    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState("");
    const [newTo, setNewTo] = useState("");
    const [alert, setAlert] = useState(false);
    const [alertType, setAlertType] = useState("");
    const [alertMsg, setAlertMsg] = useState("");
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(0);

    useEffect(()=>{
        localStorage.setItem('tasks' , JSON.stringify(tasks))
    } , [tasks , newTask , newTo])

    // handle add task from
    const handleAddTask = (e) => {
        e.preventDefault();
        //edit mode
        console.log(edit);
        if (edit) {
            tasks.forEach((task) => {
                if (task.id === id) {
                    task.task = newTask;
                    task.to = newTo;
                }
            });
            setEdit(false);
            setAlertMsg("Task has been updated Successfully !");
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 2000);
            setTasks(tasks);
            setNewTask("");
            setNewTo("");
        } else {
            // is the task already exisisted
            const isExsisted = tasks.find((task) => task.task === newTask && task.to === newTo);
            // if the task is not exsisted ==> add it to tasks array
            if (!isExsisted) {
                // if task input and to field are not empty ==> add the task
                if (newTask !== "" && newTo !== "") {
                    setTasks([...tasks, { id: Math.random() * 5, task: newTask, to: newTo }]);
                    setNewTask("");
                    setNewTo("");
                    setAlertMsg("Task is Successfully added !");
                    setAlert(true);
                    setTimeout(() => {
                        setAlert(false);
                    }, 2000);
                    setAlertType("success");
                } else {
                    // handle alert , task and to field cant be empty
                    setAlert(true);
                    setAlertType("error");
                    setAlertMsg("This field can't be empty");
                    setTimeout(() => {
                        setAlert(false);
                    }, 1500);
                }
            } else {
                setAlert(true);
                setAlertType("error");
                setAlertMsg("This task is already exisited");
                setTimeout(() => {
                    setAlert(false);
                }, 2000);
            }
        }
    };

    const handleTaskInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleTaskTo = (e) => {
        setNewTo(e.target.value);
    };

    const handleDeleteItem = (key) => {
        const tasksAfterDeletion = tasks.filter((task) => task.id !== key);
        setTasks(tasksAfterDeletion);
    };
    const handleDeleteAll = () => {
        setTasks([]);
    };
    const handelEditTask = (key) => {
        const selectedTaskToEdit = tasks.find((task) => task.id === key);
        
        setEdit(true);
        setNewTask(selectedTaskToEdit.task);
        setNewTo(selectedTaskToEdit.to);
        setId(key);
    };

    return (
        <>
            <h1>ToDo App</h1>

            {alert && alertType === "error" && <Alert alertType={alertType} alertMsg={alertMsg} />}
            {alert && alertType === "success" && (
                <Alert alertType={alertType} alertMsg={alertMsg} />
            )}

            <div className='app-container'>
                <TodoFrom
                    handleAddTask={handleAddTask}
                    handleTaskInputChange={handleTaskInputChange}
                    handleTaskTo={handleTaskTo}
                    newTask={newTask}
                    newTo={newTo}
                    edit={edit}
                />
                <TodoList
                    todos={tasks}
                    handleDeleteItem={handleDeleteItem}
                    handleDeleteAll={handleDeleteAll}
                    handelEditTask={handelEditTask}
                />
            </div>
        </>
    );
}

export default App;
