import { Card, Col, Row } from "react-bootstrap";
import useState from "react";
import Accordion from "react-bootstrap/Accordion";
import cucumber from "../../public/images/cucumber.jpg";
import Image from "next/image";
import css from "../../styles/userpost.module.css";
import { useRouter } from "next/router";

function UserPost({ data }) {
  const router = useRouter();

  function forceReload() {
    router.reload();
  }

  if (data[0]?.title !== null) {
    return (
      <div className={css.container}>
        <div className={css.postDisplay}>
          <Row xs={1} s={1} md={2} lg={3} className="g-4">
            {Array.from({ length: data.length }).map((_, idx) => (
              <Col key={idx}>
                <Card
                  style={{
                    boxShadow: "1px 1px grey",
                  }}
                >
                  <Image
                    variant="top"
                    alt={data[idx]?.title}
                    src={cucumber}
                    height={266}
                    width={160}
                    priority="true"
                  />
                  <Card.Body
                    style={{
                      textAlign: "center",
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                    }}
                  >
                    <Card.Title>{data[idx]?.title}</Card.Title>
                    <Card.Text>{data[idx]?.description}</Card.Text>
                    <Card.Text>{data[idx]?.date}</Card.Text>
                    <Card.Text>£{data[idx]?.price}</Card.Text>
                    <Card.Text>{data[idx]?.location}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>You don&apos;t have any posts at the moment</h1>
        <button onClick={forceReload}>Refresh</button>
      </div>
    );
  }
}

export default UserPost;

{
  /* <div className={css.container}>
      <div className={css.postDisplay}>
        <Row xs={1} s={1} md={2} lg={3} className="g-4">
          {Array.from({ length: data.length }).map((_, idx) => (
            <Col key={idx}>
              <Card
                style={{
                  boxShadow: "1px 1px grey",
                }}
              >
                <Image
                  variant="top"
                  alt={data[idx]?.title}
                  src={cucumber}
                  height={266}
                  width={160}
                  priority="true"
                />
                <Card.Body
                  style={{
                    textAlign: "center",
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                  }}
                >
                  <Card.Title>{data[idx]?.title}</Card.Title>
                  <Card.Text>{data[idx]?.description}</Card.Text>
                  <Card.Text>{data[idx]?.date}</Card.Text>
                  <Card.Text>£{data[idx]?.price}</Card.Text>
                  <Card.Text>{data[idx]?.location}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div> */
}
