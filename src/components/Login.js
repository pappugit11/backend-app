import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const [auth, setAuth] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      email: user.email,
      password: user.password,
    };

    axios
      .post(
        "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/user/login.php",
        sendData
      )
      .then((response) => {
        console.log(response);

        if (response.status === 200 || response.data.status === "200") {
          window.localStorage.setItem("email", response.data.email);
          window.localStorage.setItem("username", response.data.full_name);
          navigate("/");

          setAuth(response.data.full_name);
        } else {
          setError("Invalid User");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setError("There was an error logging in.");
      });
  };

  return (
    <>
      <div id="app">
        <section className="section">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                <div className="card card-primary">
                  <div className="card-header">
                    <h4>Login</h4>
                    <p>{auth}</p>
                  </div>
                  <div className="card-body">
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <form
                      method="POST"
                      action="#"
                      className="needs-validation"
                      onSubmit={submitForm}
                    >
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          tabIndex="1"
                          required
                          autoFocus
                          onChange={handleChange}
                          value={user.email}
                        />
                        <div className="invalid-feedback">
                          Please fill in your email
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="d-block">
                          <label htmlFor="password" className="control-label">
                            Password
                          </label>
                          <div className="float-right">
                            <a
                              href="auth-forgot-password.html"
                              className="text-small"
                            >
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          tabIndex="2"
                          required
                          onChange={handleChange}
                          value={user.password}
                        />
                        <div className="invalid-feedback">
                          please fill in your password
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="remember"
                            className="custom-control-input"
                            tabIndex="3"
                            id="remember-me"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="remember-me"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block"
                          tabIndex="4"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                    <div className="text-center mt-4 mb-3">
                      <div className="text-job text-muted">
                        Login With Social
                        <Link to="/"> Go to home page</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
