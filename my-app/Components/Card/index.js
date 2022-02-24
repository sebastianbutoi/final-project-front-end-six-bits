import { Card,Col, Row} from "react-bootstrap";

const Vegcard = ({ data }) => {
  return (
    <Row xs={2} s={2} md={3} lg={3}  className="g-4">
  {Array.from({ length: 6 }).map((_,idx ) => (
    <Col>
      <Card>
        <Card.Img variant="top"  />
        <Card.Body>
          <Card.Title>Iteme</Card.Title>
          <Card.Text>
              Tastes soo good
              <br/>
            Date: 
            22/02/22
              <br/>
            Price: 
            £2
            <br/>
            location: Birmingham
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
  );
};

export default  Vegcard;

//
