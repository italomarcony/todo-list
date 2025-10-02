import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [showCongrats, setShowCongrats] = useState(false);

  const MAX_TODOS = 5;

  // Carregar tarefas e tema do localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    const savedTheme = localStorage.getItem('theme');

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }

    if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Salvar tarefas no localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Alternar tema
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Adicionar tarefa
  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() && todos.length < MAX_TODOS) {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  // Completar tarefa
  const completeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setShowCongrats(true);
    setTimeout(() => setShowCongrats(false), 3000);
  };

  // Limpar todas as tarefas
  const clearAllTodos = () => {
    if (window.confirm('Tem certeza que deseja limpar todas as tarefas?')) {
      setTodos([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex flex-col">
      <div className="container mx-auto px-4 py-8 max-w-2xl flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Lista de Tarefas ✨
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Alternar tema"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Contador de tarefas */}
        <div className="mb-6 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            <span className="font-bold text-2xl text-blue-600 dark:text-blue-400">
              {todos.length}
            </span>
            <span className="text-gray-500 dark:text-gray-500">/{MAX_TODOS}</span>
            {' '}tarefas ativas
          </p>
          {todos.length >= MAX_TODOS && (
            <p className="text-red-500 dark:text-red-400 mt-2 font-medium">
              ⚠️ Limite atingido! Complete uma tarefa para adicionar mais.
            </p>
          )}
        </div>

        {/* Mensagem de parabéns */}
        {showCongrats && (
          <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 rounded-lg animate-bounce-subtle">
            <p className="text-green-800 dark:text-green-200 text-center font-medium">
              🎉 Parabéns! Você completou uma tarefa!
            </p>
          </div>
        )}

        {/* Formulário */}
        <form onSubmit={addTodo} className="mb-8">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite uma nova tarefa..."
              disabled={todos.length >= MAX_TODOS}
              className="
                flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                bg-white dark:bg-gray-800 text-gray-800 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-all
              "
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || todos.length >= MAX_TODOS}
              className="
                px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white
                rounded-lg font-medium transition-colors
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              Adicionar
            </button>
          </div>
        </form>

        {/* Lista de tarefas */}
        <div className="flex-1">
          {todos.length > 0 ? (
            <>
              <TodoList todos={todos} onComplete={completeTodo} />
              <button
                onClick={clearAllTodos}
                className="
                  mt-6 w-full px-4 py-3 bg-red-500 hover:bg-red-600 text-white
                  rounded-lg font-medium transition-colors
                "
              >
                Limpar Todas as Tarefas
              </button>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Nenhuma tarefa ainda. Adicione uma para começar! 🚀
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
