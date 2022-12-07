import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Index = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Modal.Title id="contained-modal-title-vcenter">
          Create new Notebook
        </Modal.Title>
        <form>
          <label>Notebook name:</label>
          <input type="text" name="text" />
          <p style={{ display: "none" }}>
            Please enter a name for your notebook.
          </p>
        </form>
        <Modal.Footer>
          <Button onClick={props.onHide}>Create</Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default Index;
