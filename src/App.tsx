// import styles from './styles/app.module.css';
import {useState, useRef} from 'react';

type Todo = {
  text: string
}

const App = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!todoInputRef.current?.value.trim().length) {
      return;
    }

    setTodos([...todos, {text: todoInputRef.current.value}]);
    todoInputRef.current.value = '';
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter task
          <input ref={todoInputRef} type="text"></input>
        </label>
        <button>Submit</button>
      </form>
      {todos.length ? (
        <ul>
          {todos.map(todo => <li>{todo.text}</li>)}
        </ul>
      ) : null }
    </>
  )
}

export default App;