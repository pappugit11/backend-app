import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewUsers = () => {
  // let history = useNavigate();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(
      "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/user/view-user.php"
    );
    setUsers(result.data.records);
  };

  const deleteUser = (id) => {
    console.log(id);
    axios
      .delete(
        "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/user/delete-user.php",
        {
          data: { id: id },
        }
      )
      .then(() => {
        loadUsers();
      })
      .catch(() => {
        alert("Cannot Delete the code");
      });
  };
  return (
    <>
      <div className="main-content">
        <section className="section">
          <div className="section-body">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>View Users</h4>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr className="p-0 text-center">
                            <th>ID</th>
                            <th>User Name</th>
                            <th>User email</th>
                            <th>User Mobile</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user, index) => {
                            return (
                              <tr className="p-0 text-center" key={index}>
                                <td>{index + 1}</td>
                                <td>{user.full_name}</td>
                                <td className="align-middle">{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>
                                  <Link
                                    to={`/edit-users/${user.id}`}
                                    className="btn btn-primary"
                                  >
                                    EDIT
                                  </Link>
                                </td>
                                <td>
                                  <Link
                                    onClick={() => deleteUser(user.id)}
                                    className="btn btn-danger"
                                  >
                                    DELETE
                                  </Link>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
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

export default ViewUsers;
