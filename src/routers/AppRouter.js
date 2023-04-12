import React from "react";


import BlogListPage from "../components/BlogListPage";
import BlogDetailsPage from "../components/BlogDetailsPage";
import ContactPage from "../components/ContactPage";
import NotFoundPage from "../components/NotFoundPage";

import { Router, Switch, Route } from "react-router-dom";
import AddBlogPAge from "../components/AddBlogPAge";
import EditBlogPage from "../components/EditBlogPage";
import LoginPage from "../components/LoginPage";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact />
          <PrivateRoute path="/blogs" component={BlogListPage} exact />
          <PrivateRoute path="/create" component={AddBlogPAge} />
          <PrivateRoute path="/edit/:id" component={EditBlogPage} />
          <PrivateRoute path="/blogs/:id" component={BlogDetailsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
