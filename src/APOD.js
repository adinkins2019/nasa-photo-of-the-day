import axios from "axios";
import React from "react";

export function getPhoto(date, setter, api) {
  axios
    .get(api)
    .then(response => setter(response.data))
    .catch(err => console.log(err));
}
export default function DailyPhoto(props) {
  return (
    <div>
      <p>Date: {props.date} </p>
      <img src={props.url} alt={props.alt} />
      <p style={{ verticalAlign: "super" }}>{props.attribution}</p>
      <p>{props.description}</p>
    </div>
  );
}