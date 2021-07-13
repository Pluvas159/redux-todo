import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default TodoApp;