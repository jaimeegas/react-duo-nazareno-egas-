// src/components/Citizen.jsx
import React from 'react';

const Citizen = ({ citizen, index, toggleStatus }) => {
  return (
    <li>
      <p>No. {index + 1}</p>
      <p>Name: {citizen.name}</p>
      <p>Age: {citizen.age}</p>
      <p>Address: {citizen.address}</p>
      <p>Status: {citizen.status}</p>
      <button onClick={() => toggleStatus(index)}>Toggle Status</button>
    </li>
  );
};

export default Citizen;
