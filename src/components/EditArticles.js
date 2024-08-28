import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditArticles = () => {
  let history = useNavigate();
  let { id } = useParams(); // Assuming id is passed as a route parameter

  const [selectedFile, setSelectedFile] = useState(null);
  const [cat_id, setCatId] = useState("");
  const [articles_name, setArticleName] = useState("");
  const [articles_description, setArticleDesc] = useState("");
  const [catItem, setCatItem] = useState([]);
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    loadCategories();

    if (id) {
      fetchArticleData();
    }
  }, [id]);

  const loadCategories = async () => {
    try {
      const result = await axios.get(
        "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/categories/view_category.php"
      );
      setCatItem(result.data.records);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchArticleData = async () => {
    try {
      const result = await axios.get(
        `https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/articles/getSingleBlog.php?id=${id}`
      );
      const data = result.data;
      console.log(data);
      setArticleData(data);
      setCatId(data.cat_id);
      setArticleName(data.articles_name);
      setArticleDesc(data.articles_description);
    } catch (error) {
      console.error("Error fetching article data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    formData.append("cat_id", cat_id);
    formData.append("articles_name", articles_name);
    formData.append("articles_description", articles_description);
    formData.append("id", id); // Ensure ID is included for updating

    try {
      const result = await axios.post(
        "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/articles/update_articles.php",
        formData
      );
      if (result.data.status === "valid") {
        history(`/view-articles`);
      } else {
        alert("There is some problem");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

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
                      <h4 className="text-center">Edit Article</h4>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <select
                          name="cat_id"
                          className="form-control"
                          value={cat_id}
                          onChange={(e) => setCatId(e.target.value)}
                        >
                          <option value="0">Select Category</option>
                          {catItem?.map((cat) => (
                            <option value={cat.id} key={cat.id}>
                              {cat.category_name}
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
                          value={articles_name}
                          onChange={(e) => setArticleName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Article Description</label>
                        <input
                          type="text"
                          className="form-control"
                          name="articles_description"
                          value={articles_description}
                          onChange={(e) => setArticleDesc(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Article Image</label>
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
                        Update
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

export default EditArticles;
