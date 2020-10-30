import React from "react";
import { Card, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ person, Delete, getPerson }) => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexWrap: "warp",
      }}
    >
      <Card
        style={{
          width: "18rem",
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
            height: "13rem",
          }}
        />
        <Col>
          <Image
            src={person.src}
            roundedCircle
            style={{
              height: "150px",
              width: "150px",
              position: "relative",
              bottom: "80px",
              border: "10px solid white",
              backgroundColor: "transparent",
            }}
          />
        </Col>
        <Card.Body style={{ position: "relative", bottom: "90px" }}>
          <Card.Title style={{ margin: "0", color: "#505151" }}>
            {person.name}
          </Card.Title>
          <Card.Text style={{ fontSize: "small", color: "#4baed4" }}>
            {person.email}
          </Card.Text>
        </Card.Body>
        <div className="buttons">
          <Link to="/Edit_Contact">
            <Button
              variant="outline-primary edit-button"
              onClick={() => getPerson(person)}
            >
              Edit
            </Button>
          </Link>
          <Button
            variant="outline-danger edit-button"
            onClick={() => Delete(person.id)}
          >
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default UserCard;
