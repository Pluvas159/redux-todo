let _nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: _nextTodoId++,
  text
})