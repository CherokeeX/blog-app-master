import React from "react";
import BlogForm from "./BlogForm";
import { connect } from "react-redux";
import {  editBlogsFromDatabase, removeBlogsFromDatabase } from "../actions/blogs";

const EditBlogPage = (props) => {
  return (
    <div>
      <h1>Edit Blog PAge</h1>
      <BlogForm
        blog={props.blog}
        onSubmit={(blog) => {
          props.dispatch(editBlogsFromDatabase(props.blog.id, blog));
          props.history.push("/blogs");
        }}
      />

      <button
        onClick={() => {
          props.dispatch(removeBlogsFromDatabase(  props.blog.id ));
          props.history.push("/blogs");
        }}
      >
        Delete
      </button>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find((b) => {
      return b.id === props.match.params.id;
    }),
  };
};

export default connect(mapStateToProps)(EditBlogPage);
