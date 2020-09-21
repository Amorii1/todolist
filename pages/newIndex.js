import { useEffect, useState } from "react";
import { Row, Col, Input, Button, Card } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import TodoItem from "../components/todoItem";
import TodoForm from "../components/todoForm";
import Link from "next/link";
//ant is a React UI library

const NewHome = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const _localStorage = localStorage.getItem("todos");
    if (_localStorage) setTodos(JSON.parse(_localStorage));
  }, []);

  return (
    <div className="container">
      <Row>
        <Col span={12}>
      <Link href="../">
        <Button
          type="default"
          danger
          style={{ marginBottom: "100px", height: "70%", width:"100%" }}
        >
          <h1>OLD TODO</h1>
        </Button>
      </Link>
      </Col>
      <Col span={12}>
      <Link href="pictures">
        <Button
          type="default"
          danger
          style={{ marginBottom: "100px", height: "70%", width:"100%"}}
        >
          <h1>PICTURES ALBUM</h1>
        </Button>
      </Link>
      </Col>
      </Row>
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <div className="todo-list">
        <Card>
          {todos.map((item, index) => (
            <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} />
          ))}
        </Card>
      </div>
    </div>
  );
};
export default NewHome;
