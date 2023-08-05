import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/actions';

const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <div className="container mt-5">
      <h2 className='heading'>Todo App</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={handleAddTodo}>
            Add a New Task
          </button>
        </div>
      </div>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            <button className="btn btn-danger ml-2" onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
