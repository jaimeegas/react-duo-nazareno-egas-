// src/components/Citizens.jsx
import React, { useState } from 'react';
import Citizen from './Citizen';
import SearchFilter from './SearchFilter';

const Citizens = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [citizens, setCitizens] = useState([
    { name: 'John', age: 21, address: '123 Main St', status: 'Active' },
    { name: 'Porsia', age: 25, address: '456 Oak St', status: 'Inactive' },
    { name: 'Mike', age: 40, address: '789 Peak St', status: 'Active' },
    { name: 'Hon', age: 35, address: '101 Branch St', status: 'Inactive' },
    { name: 'Abram', age: 45, address: '202 Veris St', status: 'Active' },
    { name: 'Rizza', age: 28, address: '303 West St', status: 'Inactive' },
    { name: 'Lenny', age: 50, address: '404 Town St', status: 'Active' },
    { name: 'Maica', age: 22, address: '505 Maple St', status: 'Inactive' },
    { name: 'Channy', age: 32, address: '606 Willow St', status: 'Active' },
    { name: 'Lauron', age: 27, address: '707 Kwash St', status: 'Inactive' },
  ]);

  const toggleStatus = (index) => {
    const updatedCitizens = citizens.map((citizen, i) => {
      if (i === index) {
        return { ...citizen, status: citizen.status === 'Active' ? 'Inactive' : 'Active' };
      }
      return citizen;
    });
    setCitizens(updatedCitizens);
  };

  const filteredCitizens = citizens.filter((citizen) =>
    citizen.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ul>
        {filteredCitizens.map((citizen, index) => (
          <Citizen
            key={index}
            index={index}
            citizen={citizen}
            toggleStatus={toggleStatus}
          />
        ))}
      </ul>
    </div>
  );
};

export default Citizens;
