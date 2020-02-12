import React from "react";

const NewSingle = ({ item }) => (
  <div className="col s4">
    <div className="card">
      <div className="card-image">
        <img src={item.urlToImage} alt={item.title} />
      </div>

      <div className="card-content">
        <p>{item.title}</p>
      </div>

      <div className="card-action">
        <a href={item.url} target="_blank" rel="noopener noreferrer">Read Article</a>
      </div>
    </div>
  </div>
);

export default NewSingle;
