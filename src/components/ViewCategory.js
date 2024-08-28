import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ViewCategory = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const newData = await axios.get(
      "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/categories/view_category.php"
    );

    console.log(newData);
    setData(newData.data.records);
  };
  const deleteUser = (id) => {
    axios
      .delete(
        "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/categories/delete_category.php",
        { data: { id: id } }
      )
      .then((result) => {
        loadUser();
      })
      .catch(() => {
        alert("Error in the code");
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
                    <h4>VIEW CATEGORY</h4>
                    <div className="card-header-form">
                      <form>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                          <div className="input-group-btn">
                            <button className="btn btn-primary">
                              <i className="fas fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Category Name</th>
                            <th>Category Description</th>
                            <th>Status</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((item, ind) => {
                            return (
                              <tr key={ind}>
                                <td>{item.category_name}</td>
                                <td>{item.category_description}</td>
                                <td>
                                  <div className="badge badge-success">
                                    Active
                                  </div>
                                </td>
                                <td>
                                  <Link
                                    to={`/edit-category/${item.id}`}
                                    className="btn btn-primary"
                                  >
                                    Edit
                                  </Link>
                                </td>
                                <td>
                                  <Link
                                    to=""
                                    className="btn btn-danger"
                                    onClick={() => deleteUser(item.id)}
                                  >
                                    Delete
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

export default ViewCategory;
