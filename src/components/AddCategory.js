import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  let history = useNavigate();
  const [inpData, setInpData] = useState({
    category_name: "",
    category_description: "",
  });
  const handleChange = (e) => {
    setInpData({ ...inpData, [e.target.name]: e.target.value });
  };
  // useEffect(() => {
  //   loadUser();
  // }, []);

  // const handleSubmit = async (e) => {
  //   e.preventdefault();

  //   await axios
  //     .post(
  //       "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/categories/add_category.php",
  //       inpData
  //     )
  //     .then((result) => {
  //       console.log(result);
  //       if (result.data.status == "valid") {
  //         history(`/view-category`);
  //       } else {
  //         alert("there is aproblem");
  //       }
  //     });
  // };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/categories/add_category.php",
        inpData
      )
      .then((result) => {
        if (result.status == 200) {
          history(`/view-category`);
        } else {
          console.log(result);
          alert("there is aproblem");
        }
      });
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
                    <h4 className="text-center">ADD CATEGORY</h4>
                  </div>
                  <form onSubmit={submitForm}>
                    <div className="card-body">
                      <div className="form-group">
                        <label>Category Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="category_name"
                          value={inpData.category_name}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>

                      <div className="form-group">
                        <label>Category Description</label>
                        <input
                          type="text"
                          className="form-control"
                          name="category_description"
                          value={inpData.category_description}
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

export default AddCategory;
