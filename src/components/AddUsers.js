import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {
  let history = useNavigate();

  // const [selectedFile, setSelectedFile] = React.useState(null);
  const [full_name, setFull_name] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("selectedFile", selectedFile);
    formData.append("full_name", full_name);
    formData.append("mobile", mobile);
    formData.append("email", email);
    formData.append("password", password);
    // formData.append("role", role);
    await axios
      .post(
        "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/user/add-user.php",
        formData
      )
      .then((result) => {
        console.log(result.data);
        if (result.data.status === "valid") {
          history(`/view-users`);
        } else {
          alert("there is some problem");
        }
      });
  };

  // const handleChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  return (
    <>
      <div className="main-content">
        <section className="section">
          <div className="section-body">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <form onSubmit={handleSubmit}>
                  <div className="card">
                    <div className="card-header">
                      <h4 className="text-center">ADD USERS</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label>User Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="full_name"
                          onChange={(e) => setFull_name(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>User Mobile Number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="mobile"
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>User Email ID</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      {/* <div className="form-group">
                        <label>User Role</label>
                        <select
                          name="user_role"
                          className="form-control"
                          onChange={(e) => setRole(e.target.value)}
                        >
                          <option value="admin">Admin</option>
                          <option value="user">User</option>
                        </select>
                      </div> */}
                    </div>
                    <div className="card-footer text-right">
                      <button className="btn btn-primary mr-1" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddUsers;
