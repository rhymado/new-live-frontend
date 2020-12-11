import React from "react";
import { Link, Route } from "react-router-dom";

import Topic from "../components/Topic";

const Topics = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h2>Topics</h2>
      {/* <Link to={`${match.url}/exampleTopicId`}>Example topic</Link>
      <Route path={`${match.path}/:topicId`} component={Topic} /> */}
      <Link to="/topics/exampleTopicsId">Example topic</Link>
      <Route path="/topics/:topicId" component={Topic} />
    </div>
  );
};

export default Topics;
