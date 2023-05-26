import React from "react";

export default function Tour(props) {
  return (
    <div className="tour">
      <img className="tour-image" src={props.image} alt="Not Available" />
      <div className="tour-date">{props.date}</div>
      <h3 className="tour-title">{props.title}</h3>
      <div className="tour-info">
        <p className="tour-country">{props.country}</p>
        <p className="tour-price">{props.price}</p>
      </div>
    </div>
  );
}
