import React from 'react';
import Tour from './Tour';
const Tours = ({ places, Delete }) => {
  return (
    <main>
      {places.map((place) => {
        return <Tour key={place.id} Delete={Delete} place={place} />;
      })}
    </main>
  );
};

export default Tours;
