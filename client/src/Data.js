import React from 'react';
import './App.css';

const Data = ({ data }) => {
  return (
    <div className="grid-container">
      {data.map((item, index) => (
        <div className="grid-item" key={item._id}>
          <img src={item.imageUrl} alt={item.headline} />
          <h2>{item.company[0].name}</h2>
          <h2>{item.headline}</h2>
          <h3>{item.primaryText}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
