import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditCategory = () => {
  let history = useNavigate();
  const { id } = useParams();

  const [inpData, setInpData] = useState({
    category_name: "",
    category_description: "",
  });

  const { category_name, category_description } = inpData;
  useEffect(() => {
    loadUsers();
  }, []);

  const handleChange = (e) => {
    setInpData({ ...inpData, [e.target.name]: e.target.value });
  };

  const updateForm = async (e) => {
    e.preventDefault();
    await axios
      .put(
        "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/categories/update_category.php?id=" +
          id,
        inpData
      )
      .then((result) => {
        console.log(result);
        if (result.data.status == "valid") {
          history(`/view-category`);
        } else {
          alert("there is aproblem");
        }
      });
  };

  const loadUsers = async () => {
    console.log(id);
    const result = await axios.get(
      "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/categories/edit_category.php?id=" +
        id
    );
    setInpData(result.data);
    console.log(result);
  };

  return (
    <>
      <div className="main-content">
        <section className="section">
          <div className="section-body">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="text-center">EDIT CATEGORY</h4>
                  </div>
                  <form onSubmit={(e) => updateForm(e)}>
                    <div className="card-body">
                      <div className="form-group">
                        <label>Category Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="category_name"
                          value={category_name}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>

                      <div className="form-group">
                        <label>Category Description</label>
                        <input
                          type="text"
                          className="form-control"
                          name="category_description"
                          value={category_description}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className="card-footer text-right">
                      <button className="btn btn-primary mr-1" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditCategory;
