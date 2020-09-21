import { useState } from "react";
import Link from 'next/link';


const Home = () => {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (newData) => {
    setData(newData.target.value);
  };
  const updateList = () => {
    setList([...list, data]);
    setData("");
  };
  return (
  <div className="oldTodo" >
    <div className="container">
      <Link href="newIndex"><button ><h1>New todo</h1></button></Link>
      <div className="form">
        <input
          value={data}
          onChange={handleChange}
          placeholder="Write something yoo!!"
        />
        <button onClick={updateList}>So fucking Add!</button>
      </div>
      <div className="list">
        {list.map((listItem, index) => (
          <div className="list-item">
            <p>{listItem}</p>
            <button onClick={() => setList(list.filter((e) => e !== listItem))}>
              DELETE or DIE !!
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
export default Home;
