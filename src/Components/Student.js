import React from 'react';
import StudentCard from './StudentCard';
import AttendanceButton from './AttendanceButton';

const students = [
  { id: '2300033185', name: 'A. Rakshitha', branch: 'CSE', year: '2nd' },
  { id: '2300032536', name: 'T. Monika', branch: 'CSE', year: '2nd' },
  { id: '2300030036', name: 'A. Sai Varshitha', branch: 'CSE', year: '2nd' },
  { id: '2300031098', name: 'M. Likitha', branch: 'CSE', year: '2nd' },
  { id: '2300031467', name: 'M.Isha', branch: 'CSE', year: '2nd' },
  { id: '2300032303', name: 'M.Ishita', branch: 'CSE', year: '2nd' },
];

const Student = () => {
  return (
    <div>
      <h3>STUDENT DETAILS</h3>
      <div className="student-cards-container">
        {students.map(student => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            branch={student.branch}
            year={student.year}
          />
        ))}
      </div>
    </div>
  );
}

export default Student;
