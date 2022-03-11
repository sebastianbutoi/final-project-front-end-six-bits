import { Card, Col, Row } from "react-bootstrap";
import Image from "next/image";
import css from "../../styles/card.module.css";
import Accordion from "react-bootstrap/Accordion";

const Vegcard = ({ data, area }) => {
  const found = data.filter((v) => v.location === area);
  let length = found.length;

  if (length === 0 && area === "") {
    return (
      <div className={css.container}>
        <Row
          style={{ display: "flex", justifyContent: "center" }}
          xs={2}
          s={2}
          md={2}
          lg={5}
          className="g-4"
        >
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
                  src={`/${data[idx]?.title}.png`}
                  height={266}
                  width={160}
                  priority="true"
                />
                <Card.Body
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title style={{ fontSize: "40px", color: "#1f5300" }}>
                    {data[idx]?.quantity} {data[idx]?.title}
                  </Card.Title>
                  <Card.Text style={{ fontStyle: "italic", opacity: "0.8" }}>
                    Submitted on {data[idx]?.date}
                  </Card.Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      // border: "3px solid #f7c151",
                      // borderRadius: "10px",
                      marginBottom: "10px",
                      // backgroundColor: "rgb(247, 193, 81, 0.1)",
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <Card.Text>{data[idx]?.description}</Card.Text>
                      <Card.Text>{data[idx]?.location}</Card.Text>
                      <Card.Text>£{data[idx]?.price}</Card.Text>
                    </div>
                  </div>
                  <Accordion>
                    <Accordion.Item
                      style={{
                        border: "3px solid #f7c151",
                      }}
                      eventKey="0"
                    >
                      <Accordion.Header>Contact</Accordion.Header>
                      <Accordion.Body>
                        <div className={css.contactDetails}>
                          <p>Name: {data[idx]?.first_name}</p>
                          <p>Email: {data[idx]?.email}</p>
                          <p>Phone: {data[idx]?.phone_number}</p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  if (length === 0 && area !== "") {
    return (
      <div className={css.container}>
        <h2 className={css.missingText}>
          We couldn&apos;t find any posts for that location<br></br> so here are
          all the posts instead
        </h2>
        <Row
          style={{ display: "flex", justifyContent: "center" }}
          id="cardContainer"
          xs={2}
          s={2}
          md={2}
          lg={5}
          className="g-4"
        >
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
                  src={`/${data[idx]?.title}.png`}
                  height={266}
                  width={160}
                  priority="true"
                />
                <Card.Body
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title style={{ fontSize: "40px", color: "#1f5300" }}>
                    {data[idx]?.quantity} {data[idx]?.title}
                  </Card.Title>
                  <Card.Text style={{ fontStyle: "italic", opacity: "0.8" }}>
                    Submitted on {data[idx]?.date}
                  </Card.Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      // border: "3px solid #f7c151",
                      // borderRadius: "10px",
                      marginBottom: "10px",
                      // backgroundColor: "rgb(247, 193, 81, 0.1)",
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <Card.Text>{data[idx]?.description}</Card.Text>
                      <Card.Text>{data[idx]?.location}</Card.Text>
                      <Card.Text>£{data[idx]?.price}</Card.Text>
                    </div>
                  </div>
                  <Accordion>
                    <Accordion.Item
                      style={{
                        border: "3px solid #f7c151",
                      }}
                      eventKey="0"
                    >
                      <Accordion.Header>Contact</Accordion.Header>
                      <Accordion.Body>
                        <div className={css.contactDetails}>
                          <p>Name: {data[idx]?.first_name}</p>
                          <p>Email: {data[idx]?.email}</p>
                          <p>Phone: {data[idx]?.phone_number}</p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
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
      <div className={css.container}>
        <Row
          style={{ display: "flex", justifyContent: "center" }}
          id="cardContainer"
          xs={2}
          s={2}
          md={2}
          lg={5}
          className="g-4"
        >
          {Array.from({ length: length }).map((_, idx) => (
            <Col key={idx}>
              <Card
                style={{
                  boxShadow: "1px 1px grey",
                }}
              >
                <Image
                  variant="top"
                  alt={found[idx]?.title}
                  src={`/${found[idx]?.title}.png`}
                  height={266}
                  width={160}
                  priority="true"
                />
                <Card.Body
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title style={{ fontSize: "40px", color: "#1f5300" }}>
                    {found[idx]?.quantity} {found[idx]?.title}
                  </Card.Title>
                  <Card.Text style={{ fontStyle: "italic", opacity: "0.8" }}>
                    Submitted on {found[idx]?.date}
                  </Card.Text>
                  <Card.Text>{found[idx]?.description}</Card.Text>
                  <Card.Text>{found[idx]?.location}</Card.Text>
                  <Card.Text>£{found[idx]?.price}</Card.Text>
                  <Accordion>
                    <Accordion.Item
                      style={{
                        border: "3px solid #f7c151",
                      }}
                      eventKey="0"
                    >
                      <Accordion.Header>Contact the poster</Accordion.Header>
                      <Accordion.Body>
                        <div className={css.contactDetails}>
                          <p>Name: {found[idx]?.first_name}</p>
                          <p>Email: {found[idx]?.email}</p>
                          <p>Phone: {found[idx]?.phone_number}</p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
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
