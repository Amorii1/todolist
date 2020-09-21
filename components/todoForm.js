import { Row, Col, Input, Button, Card } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
const TodoForm =(props)=>{

return (<div className="form">
        <Row gutter={20}>
          <Col span={18}>
            <Input
              placeholder="...do something dumbby"
              value={props.todo}
              onChange={(el) => props.setTodo(el.target.value)}
            />
          </Col>
          <Col span={3}>
            <Button
              style={{ width: "100%" }}
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                props.setTodos([...props.todos, props.todo]);
                props.setTodo("");
                localStorage.setItem("todos", JSON.stringify([...props.todos, props.todo]));
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
                props.setTodos([]);
                localStorage.setItem("todos", "");
              }}
              danger
            >
              Reset
            </Button>
          </Col>
        </Row>
      </div>)
}
export  default TodoForm;