import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import AddCategory from "./components/AddCategory";
import ViewCategory from "./components/ViewCategory";
import AddArticles from "./components/AddArticles";
import ViewArticles from "./components/ViewArticles";
import EditCategory from "./components/EditCategory";
import EditArticles from "./components/EditArticles";
import Login from "./components/Login";
import AddUsers from "./components/AddUsers";
import ViewUsers from "./components/ViewUsers";
import EditUsers from "./components/EditUsers";
import Comments from "./components/Comments";
import Auth from "./components/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route element={<Auth />}>
            <Route index element={<Home />} />
            <Route path="add-category" element={<AddCategory />} />
            <Route path="view-category" element={<ViewCategory />} />
            <Route path="edit-category/:id" element={<EditCategory />} />
            <Route path="add-articles" element={<AddArticles />} />
            <Route path="view-articles" element={<ViewArticles />} />
            <Route path="edit-articles/:id" element={<EditArticles />} />
            <Route path="add-users" element={<AddUsers />} />
            <Route path="view-users" element={<ViewUsers />} />
            <Route path="edit-users/:id" element={<EditUsers />} />
            <Route path="comments" element={<Comments />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
