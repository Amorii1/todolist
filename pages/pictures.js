import { useEffect, useState } from "react";
import { Button, Card, Spin, Row, Col } from "antd";
import Link from "next/link";

const { Meta } = Card;

const Pictures = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rallycoding.herokuapp.com/api/music_albums")
      .then((resp) => resp.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "rgb(86, 129, 99);" }}>
      <div className="pics-container pics">
        <Row>
          <Col span={12}>
            <Link href="../">
              <Button
                type="default"
                
                style={{ marginBottom: "50px", height: "80%" ,width:"100%"}}
              >
                <h1>OLD TODO</h1>
              </Button>
            </Link>
          </Col>
          <Col span={12}>
            {" "}
            <Link href="newIndex">
              <Button
                type="default"
                
                style={{ marginBottom: "50px", height: "80%", width:"100%"}}
              >
                <h1>NEW TODO</h1>
              </Button>
            </Link>
          </Col>
        </Row>
        {loading ? (
          //if only the loading is true
          <div className="loading">
            <div>
              <Spin style={{ paddingLeft: "15px" }} />
              <p>Loading...</p>
            </div>
          </div>
        ) : (
          //if loading is false ( Fetched successfuly )
          <div className="image-list">
            {data.map((item, index) => (
              <Card
                key={index}
                hoverable
                cover={<img alt="example" src={item.image} />}
              >
                <Meta title={item.title} description={item.artist} />
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pictures;
