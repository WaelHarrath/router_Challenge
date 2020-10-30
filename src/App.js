import React, { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import UserCard from "./components/UserCard";
import AddUser from "./components/AddUser";
import { Persons } from "./components/ContactData";

function App() {
  const [listContact, setListContact] = useState(Persons);
  const [newPerson, setNewPerson] = useState({
    name: "",
    email: "",
    src: "",
    id: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  const handelChange = (e) => {
    setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
  };

  const Add = () => {
    if (newPerson.name && newPerson.email && newPerson.src) {
      setListContact([...listContact, { ...newPerson, id: Math.random() }]);
    } else {
      alert("Can't add an empty user !!");
    }
  };

  const Delete = (Id) => {
    setListContact(listContact.filter((el) => el.id !== Id));
  };
  const getPerson = (obj) => {
    setNewPerson({
      name: obj.name,
      email: obj.email,
      src: obj.src,
      id: obj.id,
    });
    setIsEdit(true);
  };

  const reset = () => {
    setNewPerson({
      name: "",
      email: "",
      src: "",
      id: "",
    });
    setIsEdit(false);
  };

  const Edit = () => {
    setListContact(
      listContact.map((el) => (el.id === newPerson.id ? (el = newPerson) : el))
    );
  };

  return (
    <div className="App">
      <div>
        <Link to="/Contact_list">
          <Button variant="outline-primary button">Contact List</Button>
        </Link>
        <Link to="/Add_Contact">
          <Button variant="primary button" onClick={reset}>
            Add Contact
          </Button>
        </Link>
      </div>

      <div>
        <Route
          path="/Contact_list"
          render={() => (
            <div className="contact-list">
              {listContact.map((el, i) => (
                <UserCard
                  person={el}
                  key={el.id}
                  Delete={Delete}
                  getPerson={getPerson}
                />
              ))}
            </div>
          )}
        />
        <Route
          path="/(Add_Contact|Edit_Contact)/"
          render={() => (
            <AddUser
              handelChange={handelChange}
              newPerson={newPerson}
              Action={isEdit ? Edit : Add}
              isEdit={isEdit}
            />
          )}
        />
      </div>
    </div>
  );
}

export default App;
