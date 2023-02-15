import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";


function App() {
  const [users,SetUsers]=useState([]);
const onUserAdd=(user)=>{
  SetUsers([...users,user]);
 }
  return (
   <div>
    <UserForm onUserAdd={onUserAdd}/>
    <hr />
    <UserList users={users}/>
   </div>
  );
}

export default App;
