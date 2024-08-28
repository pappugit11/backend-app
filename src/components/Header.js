import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  // const userEmail = window.localStorage.getItem("email");
  const username = window.localStorage.getItem("username");

  const handleLogout = () => {
    axios
      .post(
        "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/user/logout.php"
      )
      .then((response) => {
        if (response.data.status === "success") {
          console.log(response.data.message);
          navigate(`/login`);
        } else {
          console.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error("There was an error logging out!", error);
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg main-navbar sticky">
        <div className="form-inline mr-auto">
          <ul className="navbar-nav mr-3">
            <li></li>
          </ul>
        </div>
        <ul className="navbar-nav navbar-right">
          <li className="dropdown">
            <a
              href="#"
              data-toggle="dropdown"
              className="nav-link dropdown-toggle nav-link-lg nav-link-user"
            >
              <img
                alt="image"
                src="assets/img/user.png"
                className="user-img-radious-style"
              />
              <span className="d-sm-none d-lg-inline-block"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-right pullDown">
              <div className="dropdown-title">Hello, {username}</div>
              <a href="profile.html" className="dropdown-item has-icon">
                <i className="far fa-user"></i>
                Profile
              </a>
              <a href="timeline.html" className="dropdown-item has-icon">
                <i className="fas fa-bolt"></i>
                Activities
              </a>
              <a href="#" className="dropdown-item has-icon">
                <i className="fas fa-cog"></i>
                Settings
              </a>
              <div className="dropdown-divider"></div>
              <Link
                to="/login"
                className="dropdown-item has-icon text-danger"
                onClick={handleLogout}
              >
                <i className="fas fa-sign-out-alt"></i>
                Logout
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
