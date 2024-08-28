import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <Link to="/">
              <img
                alt="image"
                src="assets/img/logo.png"
                className="header-logo"
              />
              <span className="logo-name">Otika</span>
            </Link>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Main</li>
            <li className="dropdown active">
              <Link className="nav-link" to="/">
                <i className="fa-solid fa-tv"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="menu-header">FresherIndian</li>
            <li className="dropdown">
              <a href="#" className="menu-toggle nav-link has-dropdown">
                <i className="fa-solid fa-table-list"></i>
                <span>Categories</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="nav-link" to="/add-category">
                    Add Category
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/view-category">
                    View Category
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="menu-toggle nav-link has-dropdown">
                <i className="fa-regular fa-newspaper"></i>
                <span>Articles</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="nav-link" to="/add-articles">
                    Add Articles
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/view-articles">
                    View Articles
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="menu-toggle nav-link has-dropdown">
                <i className="fa-solid fa-user"></i>
                <span>Users</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="nav-link" to="/add-users">
                    Add Users
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/view-users">
                    View Users
                  </Link>
                </li>
              </ul>
            </li>
            <li className="">
              <a href="/comments" className=" nav-link">
                <i className="fa-regular fa-comment"></i>
                <span>View Comments</span>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
