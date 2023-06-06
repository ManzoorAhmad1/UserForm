import React,{useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
const [userName,setUserName]=useState("")
const [userAge,setUserAge]=useState("")

  const onAddSubmitHandler = (event) => {
    event.preventDefault();
    setUserAge("");
    setUserName("");
    if(userName.trim().length === 0 || userAge.trim().length === 0){
      return ;
    }
    if(userAge <1){return;}
    props.onSaveUserList(userName,userAge);
  };
  const onNameHandler=(event)=>{
setUserName(event.target.value)
  }
  const onAgeHandler=(event)=>{
setUserAge(event.target.value)

  }
  return (
    <Card className={classes.input} >
      <form onSubmit={onAddSubmitHandler}>
        <label htmlFor="userName">Enter your userName</label>
        <input className="userName" value={userName} type="text"onChange={onNameHandler}  />
        <label htmlFor="userAge">Enter your age</label>
        <input className="userAge" value={userAge} type="number" onChange={onAgeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
