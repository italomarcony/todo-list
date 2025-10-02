import { useState } from 'react';

const TodoItem = ({ todo, onComplete, index }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleComplete = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onComplete(todo.id);
    }, 300);
  };

  return (
    <div
      className={`
        group flex items-center justify-between p-4 bg-white dark:bg-gray-800
        rounded-lg shadow-sm border border-gray-200 dark:border-gray-700
        hover:border-gray-300 dark:hover:border-gray-600
        transition-all duration-300
        ${isRemoving ? 'animate-slide-out opacity-0' : 'animate-slide-in'}
      `}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <p className="text-gray-800 dark:text-gray-200 flex-1 mr-4 break-words">
        {todo.text}
      </p>
      <button
        onClick={handleComplete}
        className="
          px-4 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500
          text-gray-800 dark:text-gray-200
          rounded-md transition-all duration-200 whitespace-nowrap
          flex items-center gap-2 font-medium
          opacity-0 group-hover:opacity-100
        "
      >
        Feito?
      </button>
    </div>
  );
};

export default TodoItem;
