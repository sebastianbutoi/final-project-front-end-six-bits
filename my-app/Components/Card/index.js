import { Card, Col, Row } from "react-bootstrap";
import cucumber from "../../public/images/cucumber.jpg";
import Image from "next/image";

const Vegcard = ({ data, area }) => {
  const found = data.filter((v) => v.location === area);
  let length = found.length;

  if (length === 0 && area === "") {
    return (
      <Row xs={1} s={1} md={2} lg={5} className="g-4">
        {Array.from({ length: data.length }).map((_, idx) => (
          <Col key={idx}>
            <Card>
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
    );
  }

  if (length === 0 && area !== "") {
    return (
      <div>
        <h2>
          We couldn&apos;t find any posts for that location so here is all data
          instead
        </h2>
        <Row xs={1} s={1} md={2} lg={5} className="g-4">
          {Array.from({ length: data.length }).map((_, idx) => (
            <Col key={idx}>
              <Card>
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
    );
  }

  if (length > 0) {
    return (
      <Row xs={1} s={1} md={2} lg={5} className="g-4">
        {Array.from({ length: length }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Image
                variant="top"
                alt={found[idx]?.title}
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
                <Card.Title>{found[idx]?.title}</Card.Title>
                <Card.Text>{found[idx]?.description}</Card.Text>
                <Card.Text>{found[idx]?.date}</Card.Text>
                <Card.Text>£{found[idx]?.price}</Card.Text>
                <Card.Text>{found[idx]?.location}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
};

export default Vegcard;

//
// {location === "-" ? (
//   <Vegcard data={data} />
// ) : (
//   <Vegcard  data={data} location={location} />
// )}
