import React from 'react';
import './Faculty.css';

const facultyData = [
  { id: 1034, name: 'Dr V. Murali Mohan', designation: 'Professor', department: 'CSE' },
  { id: 1038, name: 'Dr Agilesh', designation: 'Professor', department: 'ECE' },
  { id: 1043, name: 'Dr T. Nageshwar Rao', designation: 'Professor', department: 'CSA' },
];

const Faculty = () => {
  return (
    <div>
    <div className="header">
    <h3><strong>FACULTY DETAILS</strong></h3>
    </div>
    <div className="container">
      {facultyData.map((faculty) => (
        <div key={faculty.id} className="card">
          <h4>{faculty.name}</h4>
          <p className="designation">{faculty.designation}</p>
          <p>Department: {faculty.department}</p>
          <p>Faculty ID: {faculty.id}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Faculty;
