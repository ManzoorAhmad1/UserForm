import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
const AddUser = () => {
  const onAddSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input} >
      <form onSubmit={onAddSubmitHandler}>
        <label htmlFor="userName">Enter your userName</label>
        <input className="userName" type="text" />
        <label htmlFor="userAge">Enter your age</label>
        <input className="userAge" type="number" />
        <button type="submit">Add user</button>
      </form>
    </Card>
  );
};
export default AddUser;
