import React from 'react'

const CreateUser = ({ username, email, onChange, onCreate }) => {
  return (
    <div>
      <input
        name="username"
        placeholder="Username"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="Email"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  )
}

export default CreateUser