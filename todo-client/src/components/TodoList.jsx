import { TodoItem } from './TodoItem';
import './TodoList.css';

export const TodoList = ({ todos, onToggle, onDelete, loading }) => {
  if (loading) {
    return (
      <div className="loading-state">
        <div className="loader"></div>
        <p>Loading todos...</p>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <img 
          src="https://www.shutterstock.com/shutterstock/photos/1595906761/display_1500/stock-vector-girl-diary-woman-write-journal-student-studying-with-book-teenager-draws-in-cute-paper-notebook-1595906761.jpg"
          alt="No todos"
          className="empty-state-image"
        />
        <h3>No todos yet</h3>
        <p>Add your first task above to get started!</p>
      </div>
    );
  }

  const activeTodos = todos.filter(t => !t.completed);
  const completedTodos = todos.filter(t => t.completed);

  return (
    <div className="todo-list">
      <div className="todos-stats">
        <span className="stat">
          {activeTodos.length} active
        </span>
        <span className="stat">
          {completedTodos.length} completed
        </span>
      </div>

      {activeTodos.length > 0 && (
        <div className="todos-section">
          <h3 className="section-title">Active Tasks</h3>
          {activeTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}

      {completedTodos.length > 0 && (
        <div className="todos-section">
          <h3 className="section-title">Completed</h3>
          {completedTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};