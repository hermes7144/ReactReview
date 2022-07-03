import React, { useState } from 'react'

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      &nbsp;&nbsp;
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      &nbsp;&nbsp;
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  )
}

const Todos = ({
  todos,
  onInsert,
  onToggle,
  onRemove
}) => {
  const [input, setInput] = useState('');
  const onChange = e => setInput(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    onInsert(input);
    setInput('');
  }



  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map(todo =>
          <TodoItem todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />)}
      </div>
    </div>
  )
}

export default Todos