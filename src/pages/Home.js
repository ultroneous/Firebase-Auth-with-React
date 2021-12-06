import axios from "axios";
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import ButtonComponent from "../components/ButtonComponent";
import Tables from "./Tables";

function Home({ setIsLoggedIn, user }) {
  const [showUsers, setShowUsers] = useState(false);
  const [users, setUsers] = useState(null);
  const getAllUsers = async () => {
    setShowUsers(!showUsers);
    axios
      .get(
        "https://react-admin-panel-28c4e-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
      )
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Home</h1>
      <Row className="justify-content-center mt-5">
        <ButtonComponent
          onClick={() => setIsLoggedIn(false)}
          value={"Signout"}
          id="GetAllUser"
        />
        {user === "admin@admin.io" ? (
          <ButtonComponent
            onClick={getAllUsers}
            value={showUsers ? "Hide" : "Get All Users"}
            id="GetAllUser"
          />
        ) : null}
      </Row>
      {showUsers ? <Tables users={users} /> : null}
    </div>
  );
}

export default Home;
