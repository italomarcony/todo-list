import TodoItem from './TodoItem';

const TodoList = ({ todos, onComplete }) => {
  return (
    <div className="space-y-3 w-full">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          index={index}
        />
      ))}
    </div>
  );
};

export default TodoList;
