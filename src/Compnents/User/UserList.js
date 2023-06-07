import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css"

const UserList=(props)=>{
return(
  <div>
  <Card className={classes.users}>
    <ul>
        {props.users.map((user)=>{
          return <li key={user.id}>{user.name} ({user.age} yearsOld) </li>
        })}
    </ul>
  </Card>
  </div>
)
      }
export default UserList;