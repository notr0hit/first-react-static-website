import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <p className="s-icon">{props.icon}</p>
      <h3 className="title">{props.title}</h3>
      <p className="description">{props.description}</p>
    </div>
  );
}
