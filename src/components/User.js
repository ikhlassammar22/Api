import React from "react";
import "./user.css";
const User = ({ id, email, name }) => {
  return (
    <div className="card list">
      <span>{id}</span>
      <span>{name}</span>
      <span>{email}</span>
    </div>
  );
};

export default User;
