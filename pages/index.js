import { useState } from "react";
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  return (
    <div className="container">
      <div className="form">
        <input
          value={todo}
          onChange={(val) => {
            setTodo(val.target.value);
          }}
          placeholder="write smth"
        />
        <button
          onClick={() => {
            setTodos([...todos, todo]);
            setTodo("");
          }}
        >
          ADD Dude!
        </button>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => (
          <div className="todo-item" key="index">
            <p>{item}</p>
            <button onClick={
              ()=>setTodos(todos.filter((elemnt)=>elemnt !== item))
            }>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
