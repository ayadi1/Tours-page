import React, { useState } from 'react';

const Tour = ({ place, Delete }) => {
  return (
    <article className="single-tour">
      <img src={place.image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{place.name}</h4>
          <h4>{place.price}</h4>
        </div>
        <p>{place.info}</p>
        <button className="delete-btn" onClick={() => Delete(place.id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
