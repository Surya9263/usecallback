import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import Todos from './components/Todos';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <div className="App">
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
