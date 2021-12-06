import React from "react";
import { Row, Table } from "react-bootstrap";

function Tables({ users }) {
  return (
    <Table>
      {users ? (
        <Row id="User">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th> Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(users).map((user, ind) => (
                <tr key={ind}>
                  <td> {ind + 1} </td>
                  <td style={{ textTransform: "capitalize" }}> {user.name}</td>
                  <td>{user.email} </td>
                  <td> {user.contact} </td>
                  <td> {user.password} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      ) : null}
    </Table>
  );
}

export default Tables;
