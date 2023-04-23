import React from 'react';
import './App.css';

const Data = ({ data }) => {
  return (
    <div className="grid-container">
      {data.map((item, index) => (
        <div className="grid-item" key={index}>
          <img src={item.imageUrl} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
