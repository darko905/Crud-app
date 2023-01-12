
import { useState } from 'react';
import AddUserForm from './AddUser/AddUserForm';
import './App.css';
import EditUser from './EditUser/EditUser';
import UserTable from './Table/UserTable';

function App() {
  //Data
  const userData = [
    {id: 1, name: 'Darko', username: 'darko123'},
    {id: 2, name: 'Petar', username: 'petar23'},
    {id: 3, name: 'Milos', username: 'milos123'},
  ]

  const initialFormState = { id: null, name: '', username: '' };

  //seting state
  const [users, setUsers] = useState(userData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  //CRUD operations

  //add user
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }


  //delete user
  const deleteUser =(id)=>{
    setUsers(users.filter((user)=>user.id !== id))
  }


  //edit user

  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  const editRow = (user) => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  return (
    <div className="container">
      <h1>CRUD App</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          
          {editing? (
              <div>
                <h2 className='subtitle'>Edit user</h2>
                <EditUser 
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
              ):(
            <div>
              <h2 className='subtitle'>Add Users</h2>
              <AddUserForm addUser={addUser}/>
            </div>)
            }
          </div>
        <div className='flex-large'>
          <h2 className='subtitle'>View Users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
