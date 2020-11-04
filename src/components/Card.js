import React from "react";

export const Card = ({ song }) => {
  return (
    <div className="card">
      <img src={song.albumArt} alt="" />
      <div className="content">
        <h2>{song.prod_name}</h2>
        <span>BY: {song.prod_price}</span>
      </div>
    </div>
  );
};

export default Card;
