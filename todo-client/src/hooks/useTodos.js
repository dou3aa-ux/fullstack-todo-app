import { useState, useEffect, useCallback } from 'react';
import { todosApi } from '../services/api';

// useState creates a "state variable" that React watches
export const useTodos = () => {
  const [todos, setTodos] = useState([]); //array of todo objects from backend
  // []: starts as empty array
  const [loading, setLoading] = useState(true);
  // Used to show loading spinner
  const [error, setError] = useState(null);
// error: null normally, contains error message if something breaks
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const data = await todosApi.getAll();
        setTodos(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch todos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);
// useCallback creates a "memoized" function
// Memoized = React remembers it, doesn't recreate on every render
  const addTodo = useCallback(async (title) => {
    try {
      const newTodo = await todosApi.create(title);
      setTodos(prev => [newTodo, ...prev]);
      return true;
    } catch (err) {
      setError('Failed to add todo');
      console.error(err);
      return false;
    }
  }, []);

  const toggleTodo = useCallback(async (id, completed) => {
    try {
      await todosApi.update(id, !completed);
      setTodos(prev =>
        prev.map(todo =>
          todo.id === id ? { ...todo, completed: !completed } : todo
        )
      );
    } catch (err) {
      setError('Failed to update todo');
      console.error(err);
    }
  }, []);

  const deleteTodo = useCallback(async (id) => {
    try {
      await todosApi.delete(id);
      setTodos(prev => prev.filter(todo => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error(err);
    }
  }, []);

  return {
    todos,
    loading,
    error,
    addTodo,
    toggleTodo,
    deleteTodo
  };
};