import { GrCircleAlert } from "react-icons/gr";

function Alert({alertType , alertMsg}) {


    console.log(alertType)
    let textToDisplay ;

    if(alertType === 'error'){
        textToDisplay = "This field can't be empty"
    }
    
    else{
        textToDisplay = "Task is Successfully added !"
    }
   
  return (


    <div  className={`alert alert-${alertType}`}>  
           <span className="alert-text"> {alertMsg} </span> <GrCircleAlert size={27}/>
    </div>
   
    );
 
}

export default Alert;