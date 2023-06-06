import React from "react";

const AddUser =()=>{
    const onAddSubmitHandler=(event)=>{}
    return(
     <div>
        <form onSubmit={onAddSubmitHandler}>
        <label htmlFor="userName">Enter your userName</label>
            <input className="userName" type="text"/> 
            <label htmlFor="userAge">Enter your age</label>
            <input className="userAge" type="number"/>
            <button type="submit">Add user</button> 
        </form>
     </div>
    )
}
export default AddUser;