import React from "react";
import { Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddUser = ({ handelChange, Action, newPerson, isEdit }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "22rem",
          height: "25rem",
          marginRight: "30px",
          marginBottom: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Card.Header
          style={{
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#277fa5",
            color: "white",
          }}
        >
          {isEdit ? "Edit Contact " : "Add New Contact"}
        </Card.Header>

        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>name :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={newPerson.name}
                  onChange={handelChange}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>email :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={newPerson.email}
                  onChange={handelChange}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>image :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter url of image"
                  name="src"
                  value={newPerson.src}
                  onChange={handelChange}
                />
              </Form.Group>
            </Form>
          </Card.Text>
        </Card.Body>
        <div className="buttons">
          <Link to="/Contact_list">
            <Button variant="outline-primary edit-button" onClick={Action}>
              {isEdit ? "Submit" : "Add"}
            </Button>
          </Link>
          <Link to="/Contact_list">
            <Button variant="outline-danger edit-button">Cancel</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default AddUser;
