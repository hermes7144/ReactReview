import React from 'react';

const User = ({ user, onRemove, onToggle }) => {
  const { username, email } = user;
  return (<div>
    <b style={{
      cursor: 'pointer',
      color: user.active ? 'green' : 'black'
    }}
      onClick={() => onToggle(user.id)}
    >
      {username}
    </b>
    <span>({email})</span>
    <button onClick={() => onRemove(user.id)}>삭제</button>
  </div>)

}

function UserList({ users, onRemove, onToggle }) {

  return (
    <div>
      <div>
        {users.map(user =>
          <User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle} />
        )}
      </div>
    </div>
  );
}

export default UserList;