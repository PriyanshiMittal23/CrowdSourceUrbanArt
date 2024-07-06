import React from 'react';

function Card({ image, title, description, artist }) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <p><i>~{artist}</i></p>
      </div>
    </div>
  );
}

export default Card;
