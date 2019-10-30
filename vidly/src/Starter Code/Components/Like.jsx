import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  !liked ? (classes += "-o") : (classes += "");

  return (
    <i className={classes} style={{ cursor: "pointer" }} onClick={onClick}></i>
  );
};

export default Like;
