import TodoListItem from './TodoListItem'
import './TodoList.scss'

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) =>
        <TodoListItem todo={todo} key={todos.id} />)
      }

    </div>
  )
}

export default TodoList