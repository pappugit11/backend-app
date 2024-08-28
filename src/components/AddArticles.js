import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddArticles = () => {
  let history = useNavigate();

  const [selectedFile, setSelectedFile] = React.useState(null);
  const [cat_id, setCatId] = useState("");
  const [articles_name, setArticleName] = useState("");
  const [articles_description, setArticleDesc] = useState("");
  // const [featured, setFeatured] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    formData.append("cat_id", cat_id);
    formData.append("articles_name", articles_name);
    formData.append("articles_description", articles_description);
    // formData.append("featured", featured);

    await axios
      .post(
        "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/articles/add_articles.php",
        formData
      )
      .then((result) => {
        console.log(result);
        if (result.data.status === "valid") {
          // console.log(result.data);
          history(`/view-articles`);
        } else {
          alert("there is some problem");
        }
      });
  };

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const [catItem, setCatItem] = useState([]);
  const loadUsers = async () => {
    const result = await axios.get(
      "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/categories/view_category.php"
    );
    setCatItem(result.data.records);
  };
  return (
    <>
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      <div className="main-content">
        <section className="section">
          <div className="section-body">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <form onSubmit={handleSubmit}>
                  <div className="card">
                    <div className="card-header">
                      <h4 className="text-center">ADD ARTICLE</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <select
                          name="cat_id"
                          className="form-control"
                          onChange={(e) => setCatId(e.target.value)}
                        >
                          <option value="0">Select Category</option>
                          {catItem?.map((catItem) => (
                            <option value={catItem.id} key={catItem.id}>
                              {catItem.category_name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Article Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="articles_name"
                          onChange={(e) => setArticleName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Article Description</label>
                        <input
                          type="text"
                          className="form-control"
                          name="articles_description"
                          onChange={(e) => setArticleDesc(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Artical Image</label>
                        <input
                          type="file"
                          className="form-control"
                          name="article_image"
                          onChange={handleChange}
                        />
                      </div>
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
      {/* <Footer /> */}
    </>
  );
};

export default AddArticles;
