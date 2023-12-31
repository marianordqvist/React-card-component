import React from "react";
import "./Card.css";

function Card({ title, imageUrl, body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" width="350px" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h2>{title}</h2>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>

        <div className="btn-container">
          <button>
            <a>Read more</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
