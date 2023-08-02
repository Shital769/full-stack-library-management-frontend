import React, { useState } from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { InputField } from "../components/InputField/InputField";
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-toastify"

const LoginPage = () => {
  //declarig state variable
  const [formData, setFormData] = useState({});
  //   The useNavigate hook returns a function that lets you navigate programmatically.
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { status, message, user } = await loginUser(formData);

    if (status === "success") {
      sessionStorage.setItem("user", JSON.stringify(user));
      toast.success(message);
      navigate("/books");
    } else {
      toast.error(message);
    }
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "text",
      placeholder: "John@gmail.com",
      required: true,
    },

    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "********",
      required: true,
    },
  ];

  return (
    <DefaultLayout>
      <Container>
        <Row className="mt-5">
          <Col className="col-md-6 bg-primary p-5">
            <div className="bg-light p-4 rounded">
              <Form>
                <h2 className="text-center">Login</h2>
                <hr />

                {inputs.map((input, i) => {
                  <InputField key={i} {...input} onChange={handleOnChange} />;
                })}

                <div>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </div>
              </Form>

              <div className="text-center mt-3">
                Don's have an Account? <Link to="/register">Register Now!</Link>
              </div>
            </div>
          </Col>
          <Col className="col-md-6 text-center register-info d-flex align-item-center d-none d-md-flex">
            <div>
              <h1>Welcome to Library Management System</h1>
              <hr />
              <p>Login to view and start borriwng books.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default LoginPage;
