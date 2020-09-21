import { Row, Col, Input, Button, Card } from "antd";
import {  DeleteOutlined } from "@ant-design/icons";
const TodoItem=(props)=>{
return( <div>
    <Row>
      <Col span={20}>{props.item}</Col>
      <Col span={4}>
        <Button
        style={{width:"100%"}}
          danger
          type="primary"
          shape="square"
          icon={<DeleteOutlined />}
          onClick={() => {
            props.setTodos(props.todos.filter((el) => el !== props.item));
            localStorage.setItem("todos",JSON.stringify(props.todos.filter((el) => el !== props.item)))
          }}
        >
          Delete
        </Button>
      </Col>
    </Row>
    <br/>
    </div>)
}
export default TodoItem;