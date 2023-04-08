import React from 'react'
import BlogForm from './BlogForm';
import {connect} from 'react-redux';
import {addBlogToDatabase} from '../actions/blogs'

const AddBlogPAge = (props) => {
  return (
    <div>
<h1> Add Blog PAge   </h1>

<BlogForm onSubmit={(blog)=> {
  props.dispatch(addBlogToDatabase(blog));
  props.history.push('/blogs');
}} />


    </div>
  )
}

export default connect()(AddBlogPAge) 