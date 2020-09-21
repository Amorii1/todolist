import { useEffect, useState } from "react";
import { Row, Col, Input, Button, Card } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import Link from 'next/link';
//ant is a React UI library

const NewHome = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

useEffect(()=>{
const _localStorage=localStorage.getItem("todos")
if(_localStorage)
setTodos(JSON.parse(_localStorage))
},[])

  return (
    <div className="container">
      <Link  href="../"><Button type="default" danger style={{marginBottom:"100px", height:"100%"}}><h1>OLD TODO</h1></Button></Link>
      <div className="form">
        <Row gutter={20}>
          <Col span={18}>
            <Input
              placeholder="...do something dumbby"
              value={todo}
              onChange={(el) => setTodo(el.target.value)}
            />
          </Col>
          <Col span={3}>
            <Button
              style={{ width: "100%" }}
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                setTodos([...todos, todo]);
                setTodo("");
                localStorage.setItem("todos", JSON.stringify([...todos, todo]));
              }}
            >
              ADD
            </Button>
          </Col>
          <Col span={3}>
            <Button
              style={{ width: "100%" }}
              type="primary"
              icon={<DeleteOutlined />}
              onClick={() => {
                setTodos([]);
                localStorage.setItem("todos", "");
              }}
              danger
            >
              Reset
            </Button>
          </Col>
        </Row>
      </div>
      <div className="todo-list">
        <Card>
          {todos.map((item, index) => (
            <div>
            <Row>
              <Col span={20}>{item}</Col>
              <Col span={4}>
                <Button
                style={{width:"100%"}}
                  danger
                  type="primary"
                  shape="square"
                  icon={<DeleteOutlined />}
                  onClick={() => {
                    setTodos(todos.filter((el) => el !== item));
                    localStorage.setItem("todos",JSON.stringify(todos.filter((el) => el !== item)))
                  }}
                >
                  Delete
                </Button>
              </Col>
            </Row>
            <br/>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};
export default NewHome;
