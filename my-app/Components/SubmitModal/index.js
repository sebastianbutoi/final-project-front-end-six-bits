import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function SubmitModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Add Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            Name: <br></br>
            <input></input>
          </label>
          <br></br>
          <label>
            Item: <br></br>
            <input></input>
          </label>
          <br></br>
          <label>
            Price: <br></br>
            <input></input>
          </label>
          <br></br>
          <label>
            Location: <br></br>
            <input></input>
          </label>
          <br></br>
          <label>
            Description: <br></br>
            <textarea
              maxLength="100"
              style={{ resize: "none", width: "300px", height: "100px" }}
            ></textarea>
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SubmitModal;
