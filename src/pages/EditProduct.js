import React from "react";
import { Switch, Route } from "react-router-dom";

const Store = () => {
  return (
    <div>
      <h1>Store</h1>
    </div>
  );
};
const Edit = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h1>Edit</h1>
    </div>
  );
};
const Profile = () => {
  return (
    <div>
      <h1>My Profile</h1>
    </div>
  );
};
export default function EditProduct({ match, location, history }) {
  console.log(match);
  console.log(location);
  console.log(history);
  return (
    <Switch>
      <Route path="/profile/store" component={Store} />
      <Route
        path="/profile/edit/:id"
        children={(props) => <Edit {...props} />}
      />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
