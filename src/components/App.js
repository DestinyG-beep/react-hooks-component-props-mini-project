import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* Header component */}
      <Header name={blogData.name} />

      {/* Sidebar */}
      <aside>
        <p>About this blog: {blogData.about}</p>
        <img src={blogData.image} alt="blog logo" />
      </aside>

      {/* Main content */}
      <main>
        <ArticleList posts={blogData.posts} />
      </main>
    </div>
  );
}

export default App;
