import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";

function ErrorPage() {
  return (
    <div>
      <h1> 404! Error Not Found </h1>
      <p>
        {" "}
        <Link to="/register">Back to home</Link>
      </p>
    </div>
  );
}

export default ErrorPage;
