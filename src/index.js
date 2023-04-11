import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter , {history} from './routers/AppRouter';
import "./App.css"
import configureStore from './store/configureStore';
import {  getBlogsFromDatabase  } from './actions/blogs'
import { Provider } from 'react-redux';
import './firebase/fireBaseConfig'
import firebase from  'firebase/app'
import { loginAction,logoutAction } from './actions/auth';



const store = configureStore();

// store.subscribe(()=> {
//     console.log(store.getState());
// }) 

// const blog1 = store.dispatch(addBlog({title: 'blog title 1', description: 'blog description 1'}))
// const blog2 = store.dispatch(addBlog({title: 'blog title 2', description: 'blog description 2', dateAdded: Date.now()}))
// const blog3 = store.dispatch(addBlog({title: 'blog title 3', description: 'blog description 3', dateAdded: Date.now()}))
// const blog4 = store.dispatch(addBlog({title: 'blog title 4  ', description: 'blog description 3', dateAdded: Date.now()}))
// const blog5 = store.dispatch(addBlog({title: 'blog title 5', description: 'blog description 3', dateAdded: Date.now()}))
// const blog6 = store.dispatch(addBlog({title: 'blog title 6', description: 'blog description 3', dateAdded: Date.now()}))

// store.dispatch(removeBlog({id: blog1.blog.id}))
// store.dispatch(editBlog(blog2.blog.id, { title: 'updated blog title', description: 'updated blog description' }))
// store.dispatch(
//     editBlog(blog2.blog.id, {
//       title: "Upgrated title info",
//       description: "New description....",
//       country: "TURKEY",
//     })
//   );
const result = (<Provider store={store}><AppRouter /></Provider>);

const root = ReactDOM.createRoot(document.getElementById("root"));

let isRendered = false;
const renderApp = ()=> {
  if(!isRendered){
    store.dispatch(getBlogsFromDatabase()).then(()=>{root.render(result)});
    isRendered = true;

  }
}


firebase.auth().onAuthStateChanged(function(user){

  if (user){
    store.dispatch(loginAction(user.uid));
    store.dispatch(getBlogsFromDatabase()).then(()=>{
      renderApp () ; 
if (history.location.pathname ==='/'){
  history.push('/blogs');
}
    })
    

    console.log('user logged in');
    console.log(user.uid);
  }else {
renderApp();
    console.log('user logged out');
    history.push('/');
  }
})


// If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA

