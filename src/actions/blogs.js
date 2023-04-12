import { v4 as uuid } from 'uuid';
import database from '../firebase/fireBaseConfig'

export const addBlog = (blog) => ({
    type: "ADD_BLOG",
    blog
    })

export const addBlogToDatabase = (blogData = {})=> {

    return(dispatch, getState)=>{
        const uid = getState().auth.uid;
        const {title='', description='',dateAdded=0} =blogData;
        const blog = {title,description,dateAdded,uid};
        database.ref('blogs').push(blog).then((res)=> {
            dispatch(addBlog({
                id: res.key,
                ...blog
            }))
        })
    }
}   



export const removeBlog = (id) => (    {
        type: "REMOVE_BLOG",
        id: id
    });

export const removeBlogsFromDatabase = (id)=> {
    return(dispatch)=> {
        return database.ref(`blogs/${id}`).remove().then(()=>{
            dispatch(removeBlog(id));
        })

    }
}

export const editBlog = (id,updates) => ({
    type: "EDIT_BLOG",
    id,
    updates
})

export const  editBlogsFromDatabase = (id,updates)=>{
    return (dispatch)=>{    
        return database.ref(`blogs/${id}`).update(updates).then(()=>{
            dispatch(editBlog(id,updates));
        })
    }
}

export const setBlogs = ( blogs)=> ({
    type : 'SET_BLOGS',
    blogs
})
export const getBlogsFromDatabase = ()=>{
    return (dispatch) => {
        return database.ref('blogs').once('value').then((snapshot)=>{
            const blogs = [ ];
            snapshot.forEach((blog)=>{
                blogs.push({
                    id: blog.key,
                    ...blog.val()
                })
            })
     dispatch(setBlogs(blogs));
        })
    }
    
}
