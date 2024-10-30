import React from 'react';
import './StudentCard.css'; 
import AttendanceButton from './AttendanceButton';

const StudentCard = ({ id, name, branch, year }) => {
  return (
    <div className="student-card">
      <h4>{name}</h4>
      <p><strong>Student ID:</strong> {id}</p>
      <p><strong>Branch:</strong> {branch}</p>
      <p><strong>Year:</strong> {year}</p>
      <AttendanceButton></AttendanceButton>
    </div>
  );
}

export default StudentCard;
