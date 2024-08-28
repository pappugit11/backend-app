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
// import Sidebar from "./Components/Sidebar";
// import Navbar from "../Component/Navbar";
// import Footer from "../Component/Footer";

const ViewArticles = () => {
  let history = useNavigate();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/articles/view_articles.php"
    );
    setArticles(result.data.records);
  };

  const deleteArticle = (id) => {
    axios
      .delete(
        "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/articles/delete_articles.php",
        {
          data: { id: id },
        }
      )
      .then((result) => {
        loadUsers();
        // history(`/view-articles`);
      })
      .catch(() => {
        alert("Cannot Delete the code");
      });
  };
  return (
    <div>
      {/* <Header /> */}
      {/* <Sidebar /> */}
      <div className="main-content">
        <section className="section">
          <div className="section-body">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>View Articles</h4>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr className="p-0 text-center">
                            <th>ID</th>
                            <th>Cat Id</th>
                            <th>Articles Name</th>
                            <th>Articles Description</th>
                            <th>Image</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                          </tr>
                        </thead>
                        <tbody>
                          {articles.map((articles, index) => {
                            console.log(articles);
                            return (
                              <tr className="p-0 text-center" key={index}>
                                <td>{index + 1}</td>
                                <td>{articles.cat_id}</td>
                                <td className="align-middle">
                                  {articles.articles_name}
                                </td>
                                <td>{articles.articles_description}</td>
                                <td>
                                  <img
                                    src={
                                      "https://acesoftech.co.in/tanzil/ecomAPI/tanzil_blog/images/" +
                                      articles.image
                                    }
                                    height="50"
                                    width="50"
                                  />
                                </td>
                                <td>
                                  <Link
                                    to={`/edit-articles/${articles.id}`}
                                    className="btn btn-primary"
                                  >
                                    EDIT
                                  </Link>
                                </td>
                                <td>
                                  <Link
                                    onClick={() => deleteArticle(articles.id)}
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
    </div>
  );
};

export default ViewArticles;
