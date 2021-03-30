import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { callAxios } from "../../utils/Axios";
import { ToastContainer } from "react-toastify";
import { URL, METHOD } from "../../utils/constant";
import { setTokenToAxios } from "../../utils/setAuthToken";
import { showToast } from "../../utils/Toast";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const Login = () => {
  // Hooks
  const [tf, setTf] = useState({
    email: "",
    password: "",
  });
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (response && response.status === 200) {
      localStorage.setItem("auth", response.result.auth);
      showToast(response.message);
    }
  }, [response]);

  // On change handler
  function handleOnChange(e) {
    setTf({ ...tf, [e.target.name]: e.target.value });
  }

  // On click handler
  function Login(e) {
    e.preventDefault();
    callAxios(URL.driver.LOGIN, METHOD.POST, { ...tf, deviceType: "WEB", deviceToken: "WEB" })
      .then((data) => setResponse(data))
      .catch((e) => {
        console.log("Error ==================>", e);
        showToast(e, "error");
      });
  }

  if (localStorage.auth) setTokenToAxios(localStorage.auth);

  return (
    <Container>
      <ToastContainer />
      <h2 className='heading'> Driver Login</h2>
      <Form>
        <Form.Group className='w-50'>
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => handleOnChange(e)} name='email' type='email' placeholder='Enter email' value={tf.email} />
        </Form.Group>

        <Form.Group className='w-50'>
          <Form.Label className='password'>Password</Form.Label>
          <Form.Control onChange={(e) => handleOnChange(e)} name='password' type='password' placeholder='Password' value={tf.password} />
        </Form.Group>
        <Button variant='primary' type='submit' className='submit' onClick={(e) => Login(e)}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
