import './App.css';
import React,{useState} from 'react';
import AddUser from './Compnents/User/AddUser';
import UserList from "./Compnents/User/UserList";

function App() {
  const [UserListData,setUserListData]=useState([]);
  const onAddUserHandler=(uName,uAge)=>{
    setUserListData((prevListData)=>{
     return [...prevListData,{name:uName , age:uAge,id:Math.random().toString()}]
    })
  }
  return (
    <div>
    <AddUser onSaveUserList={onAddUserHandler}/>
     <UserList users={UserListData}/>
    </div>
  );
}

export default App;
