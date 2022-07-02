import React from 'react';
import { insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const TodosContainer = () => {
  const { todos } = useSelector(({ todos }) => ({
    todos: todos.todos
  }))
  const dispatch = useDispatch();
  const onInsert = text => dispatch(insert(text));
  const onToggle = id => dispatch(toggle(id));
  const onRemove = id => dispatch(remove(id));


  return (
    <Todos
      todos={todos}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  )
}
export default TodosContainer;
