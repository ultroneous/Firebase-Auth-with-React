import axios from "axios";
import React, { useState } from "react";
import { Container, Form, FormControl, Row, Col, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ButtonComponent from "../components/ButtonComponent";
import { MESSAGE_CONSTANT } from "../constants/MESSAGE_CONSTANT";
import { useNavigate } from "react-router-dom";

import "./Register.css";

function Register({ setIsLoggedIn, setUserData }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) ",
    width: "80%",
  };

  const [login, setLogin] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    const url = login
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC3OUrpdOIRcbdOeUE_L38VTwk6RtruAfQ"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3OUrpdOIRcbdOeUE_L38VTwk6RtruAfQ";

    await axios
      .post(url, { email: data.email, password: data.password })
      .then((res) => {
        setIsLoggedIn(true);
        setUserData(res.data.email);
      })
      .catch((err) => console.log(err));

    if (!login) {
      axios
        .post(
          "https://react-admin-panel-28c4e-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
          data
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    navigate("/");

    e.target.reset();
  };

  return (
    <Container style={style}>
      <Row>
        <h3> {login ? "Login" : "Signup"} </h3>
      </Row>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {login ? null : (
          <>
            <Row className="mt-4">
              <Col xs={3} sm={3}>
                <Form.Label> Name</Form.Label>
              </Col>
              <Col xs={10} sm={9}>
                <FormControl
                  {...register("name", {
                    required: true,
                  })}
                  type="text"
                  placeholder="Enter Full Name"
                />
                <p style={{ color: "red" }}>
                  {errors?.name?.type === "required" &&
                    MESSAGE_CONSTANT.name.required}
                </p>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={3} sm={3}>
                <Form.Label>Contact No.</Form.Label>
              </Col>
              <Col xs={10} sm={9}>
                <FormControl
                  {...register("contact", {
                    required: true,
                    minLength: 5,
                    maxLength: 10,
                  })}
                  type="number"
                  placeholder="Enter Contact Info"
                />
                <p style={{ color: "red" }}>
                  {errors?.contact?.type === "minLength" ||
                    (errors?.contact?.type === "maxLength" &&
                      MESSAGE_CONSTANT.contact.valid)}
                  {errors?.contact?.type === "required" &&
                    MESSAGE_CONSTANT.contact.required}
                </p>
              </Col>
            </Row>
          </>
        )}
        <Row className="mt-4">
          <Col xs={3} sm={3}>
            <Form.Label>Email address</Form.Label>
          </Col>
          <Col xs={10} sm={9}>
            <FormControl
              {...register("email", {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
              type="email"
              placeholder="Enter email"
            />
            <p style={{ color: "red" }}>
              {errors?.email?.type === "pattern" &&
                MESSAGE_CONSTANT.email.valid}
              {errors?.email?.type === "required" &&
                MESSAGE_CONSTANT.email.required}
            </p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={3} sm={3}>
            <Form.Label>Password</Form.Label>
          </Col>
          <Col xs={10} sm={9}>
            <FormControl
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
              })}
              type="password"
              placeholder="Enter Password"
            />
            <p style={{ color: "red" }}>
              {errors?.password?.type === "pattern" &&
                MESSAGE_CONSTANT.password.valid}
              {errors?.password?.type === "required" &&
                MESSAGE_CONSTANT.password.required}
            </p>
          </Col>
        </Row>

        <Row className="mt-5 justify-content-around">
          <ButtonComponent
            type="submit"
            value="Submit"
            style={{
              width: "7rem",
              height: "3rem",
              borderRadius: "1rem",
            }}
          />
          <ButtonComponent
            onClick={() => setLogin(!login)}
            value={login ? "Signup" : "Login"}
            style={{
              width: "7rem",
              height: "3rem",
              borderRadius: "1rem",
            }}
          />
        </Row>
      </Form>
    </Container>
  );
}

export default Register;
