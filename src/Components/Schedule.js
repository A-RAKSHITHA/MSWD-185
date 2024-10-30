import React, { useState } from 'react';
import './Schedule.css'; // Import the CSS file

const Schedule = () => {
  const [filterText, setFilterText] = useState('');

  const [data, setData] = useState([
    { Day: 'Monday', Hours: '1-2', Course: 'MSWD', Room: 'C017', LTPS: 'P' },
    { Day: 'Monday', Hours: '4-5', Course: 'AOOP', Room: 'C211', LTPS: 'S' },
    { Day: 'Monday', Hours: '3-4', Course: 'LINUX', Room: 'C221', LTPS: 'S' },
    { Day: 'Tuesday', Hours: '4-5', Course: 'AOOP', Room: 'C211', LTPS: 'S' },
    { Day: 'Tuesday', Hours: '8-9', Course: 'PSQT', Room: 'C608', LTPS: 'L' },
    { Day: 'Wednesday', Hours: '8-9', Course: 'PSQT', Room: 'C608', LTPS: 'L' },
    { Day: 'Thursday', Hours: '3-4', Course: 'LINUX', Room: 'C221', LTPS: 'S' },
    { Day: 'Thursday', Hours: '6-7', Course: 'AIML', Room: 'C423', LTPS: 'L' },
    { Day: 'Friday', Hours: '6-7', Course: 'AIML', Room: 'C423', LTPS: 'L' },
    { Day: 'Friday', Hours: '10-11', Course: 'OS', Room: 'L308', LTPS: 'S' },
    { Day: 'Friday', Hours: '1-2', Course: 'MSWD', Room: 'C017', LTPS: 'P' },
    { Day: 'Saturday', Hours: '10-11', Course: 'OS', Room: 'L308', LTPS: 'S' },
    // Add more data items as needed
  ]);

  // Handle filter input changes
  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  // Filter data based on the filterText
  const filteredData = data.filter(item =>
    [item.Course, item.Hours, item.Day].some(field =>
      field.toLowerCase().includes(filterText.toLowerCase())
    )
  );

  return (
    <div className="schedule-container">
      <h1>TIME TABLE</h1>
      <input
        type="text"
        className="schedule-input"
        placeholder="Filter by course, hours, or day"
        value={filterText}
        onChange={handleFilterChange}
      />
      <ul className="schedule-list">
        {filteredData.length === 0 ? (
          <li className="no-results">No results found</li>
        ) : (
          filteredData.map(filteredItem => (
            <li key={`${filteredItem.Day}-${filteredItem.Hours}`} className="schedule-card">
              <div className="card-header">
                {filteredItem.Day}
              </div>
              <div className="card-body">
                <div><strong>Hours:</strong> {filteredItem.Hours}</div>
                <div><strong>Course:</strong> {filteredItem.Course}</div>
                <div><strong>Room:</strong> {filteredItem.Room}</div>
                <div><strong>LTPS:</strong> {filteredItem.LTPS}</div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Schedule;
