import React from "react";

export default function Topic({ match }) {
  return (
    <div>
      <h1>TopicId</h1>
      <p>{JSON.stringify(match)}</p>
    </div>
  );
}
