import React from "react";

const ButtonDislikeBoard = ({ onDislike }) => {
  return (
    <button onClick={onDislike} className="btn-dislike">
      Dislike
    </button>
  );
};

export default ButtonDislikeBoard;
