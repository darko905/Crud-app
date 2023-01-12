import React, { useEffect, useState } from 'react'

const EditUser = (props) => {
    const [user, setUser] = useState(props.currentUser)


    useEffect(
      () => {
        setUser(props.currentUser)
      },
      [ props ]
    )

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }
  return (
    <form
      onSubmit={(event)=>{
        event.preventDefault()
        if(!user.name || !user.username) return

        props.updateUser(user.id, user)
      }}>
        <label>Name</label>
        <input 
          type='text' 
          name='name' 
          value={user.name}
          onChange={handleInputChange}
          />
        <label>Username</label>
        <input 
          type='text' 
          name='username' 
          value={user.username}
          onChange={handleInputChange}
          />
        <button className='button add-button'>Update user</button>
        <button className='button calcel-button' onClick={() => props.setEditing(false)}>Cancel</button>
    </form>
  )
}

export default EditUser
