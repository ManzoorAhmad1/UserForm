import React from "react";
import Card from "../UI/Card"
const AddUser =()=>{
    const onAddSubmitHandler=(event)=>{
     event.preventDefault();
    }
    return(
     <Card>
        <form onSubmit={onAddSubmitHandler}>
        <label htmlFor="userName">Enter your userName</label>
            <input className="userName" type="text"/> 
            <label htmlFor="userAge">Enter your age</label>
            <input className="userAge" type="number"/>
            <button type="submit">Add user</button> 
        </form>
     </Card>
    )
}
export default AddUser;