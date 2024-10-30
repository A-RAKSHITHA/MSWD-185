import React from 'react';
import './Course.css';

const courseData = [
  { code: '23UC2202', name: 'Linear Algebra', ltps: '3-0-2-3', credits: 4 },
  { code: '23UC1203', name: 'MSWB', ltps: '0-0-2-3', credits: 6 }
];

const Course = () => {
  return (
    <div>
      <div className="header">
        <h3><strong>COURSE DETAILS</strong></h3>
      </div>
      <div className="container">
        {courseData.map((course) => (
          <div key={course.code} className="card">
            <h4>{course.name}</h4>
            <p><strong>Course Code:</strong> {course.code}</p>
            <p><strong>LTPS:</strong> {course.ltps}</p>
            <p><strong>Credits:</strong> {course.credits}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;

