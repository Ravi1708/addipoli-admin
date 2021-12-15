// import "login/vendor/bootstrap/css/bootstrap.min.css";
// import "login/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
// import "login/vendor/animate/animate.css";
// import "login/vendor/css-hamburgers/hamburgers.min.css";
// import "login/vendor/select2/select2.min.css";
// import "login/css/main.css";
// import "login/css/util.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Spinner";
import { login } from "../actions/userActions";
import { FormContainer } from "../components/FormContainer";
import { Redirect } from "react-router-dom";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      Redirect("/product");
    }
  }, [history, userInfo]);
  console.log(userInfo);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      {/* <FormContainer>
        <h1>Sign In</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Sign In
          </Button>
        </Form>
      </FormContainer> */}
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src="/assets/images/logo-icon.png" alt="img" />
            </div>

            <form
              onSubmit={submitHandler}
              className="login100-form validate-form"
              method="post"
              action="validatelogin.php"
            >
              <span className="login100-form-title">Addipoli Login</span>
              {error && <Message variant="danger">{error}</Message>}

              <div
                className="wrap-input100 validate-input"
                data-validate="Valid name is required"
              >
                <input
                  className="input100"
                  type="text"
                  name="name"
                  placeholder="Username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn" type="submit">
                  Login
                </button>
              </div>
              
              {/* <!-- <div className="text-center p-t-136">
						<a className="txt2" href="reg.php">
							Create your Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div> --> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
