import React from 'react'
import './userTable.css'

const UserTable = (props) => {
  return (
    <table className='table'>
        <thead className='table__head'>
            <tr>
                <th>Name:</th>
                <th>Username:</th>
                <th>Actions:</th>
            </tr>
        </thead>
        <tbody className='table__body'>
        {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button 
                className="button edit-button" 
                onClick={() => {
                  props.editRow(user)
                }}>
                  Edit
              </button>
              <button 
                className="button delete-button" 
                onClick={()=>props.deleteUser(user.id)}
                >
                  Delete
              </button>
              
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
        </tbody>
    </table>
  )
}

export default UserTable
