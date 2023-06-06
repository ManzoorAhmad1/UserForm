import React,{useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "./Button";
const AddUser = () => {
const [userName,setUserName]=useState()
const [userAge,setUserAge]=useState()

  const onAddSubmitHandler = (event) => {
    event.preventDefault();
    setUserAge("");
    setUserName("");
    console.log(userName,userAge)
  };
  const onUserName=(event)=>{
setUserName(event.target.value)
  }
  const onUserAge=(event)=>{
setUserAge(event.target.value)

  }
  return (
    <Card className={classes.input} >
      <form onSubmit={onAddSubmitHandler}>
        <label htmlFor="userName">Enter your userName</label>
        <input className="userName" value={userName} type="text"onChange={onUserName}  />
        <label htmlFor="userAge">Enter your age</label>
        <input className="userAge" value={userAge} type="number" onChange={onUserAge}/>
        <Button type="submit"></Button>
      </form>
    </Card>
  );
};
export default AddUser;
