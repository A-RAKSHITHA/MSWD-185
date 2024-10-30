import React, { useState } from 'react';

const FeedBackForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    faculty: '',
    communicationSkills: '', // Will store a single value based on checkboxes
    remarks: ''
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked ? value : '' // Only set value if checkbox is checked
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    // Optionally clear the form
    setFormData({
      courseName: '',
      faculty: '',
      communicationSkills: '',
      remarks: ''
    });
  };

  return (
    <div>
      <h1>Feedback Form</h1>
      <style>
        {`
          div {
            text-align: center;
          }
          table {
            width: 75%;
            margin: 0 auto;
            border-collapse: collapse;
          }
          /* Styling for the feedback form table */
          .form-table td {
            padding: 8px;
            text-align: left;
          }
          .form-table th {
            padding: 8px;
            background-color: #f4f4f4;
          }
          /* Styling for the submitted information table */
          .submitted-info-table {
            width: 75%;
            margin: 20px auto;
            border-collapse: collapse;
          }
          .submitted-info-table td, .submitted-info-table th {
            padding: 8px;
            border: 1px solid #ddd;
            text-align: center;
          }
          .submitted-info-table th {
            background-color: #f4f4f4;
          }
          input[type="text"] {
            width: 70%;
            padding: 8px;
            box-sizing: border-box;
          }
          input[type="submit"] {
            padding: 10px 20px;
            background-color: #a51c24;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: block;
            margin: 20px auto;
          }
          input[type="submit"]:hover {
            background-color: #900c1d;
          }
          label {
            display: block;
            margin-bottom: 10px;
          }
          .checkbox-group {
            display: flex;
            justify-content: left;
            gap: 10px;
          }
          .checkbox-group input {
            margin: 0;
          }
        `}
      </style>
      <form onSubmit={handleSubmit}>
        <table className="form-table">
          <tbody>
            <tr>
              <td><label htmlFor="course-name">Course Name:</label></td>
              <td><input id="course-name" name="courseName" type="text" value={formData.courseName} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="faculty">Faculty:</label></td>
              <td><input id="faculty" name="faculty" type="text" value={formData.faculty} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Communication Skills:</label></td>
              <td>
                <div className="checkbox-group">
                  <label><input type="checkbox" name="communicationSkills" value="Good" checked={formData.communicationSkills === 'Good'} onChange={handleChange} /> Good</label>
                  <label><input type="checkbox" name="communicationSkills" value="Bad" checked={formData.communicationSkills === 'Bad'} onChange={handleChange} /> Bad</label>
                  <label><input type="checkbox" name="communicationSkills" value="Average" checked={formData.communicationSkills === 'Average'} onChange={handleChange} /> Average</label>
                </div>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="remarks">Remarks:</label></td>
              <td><input id="remarks" name="remarks" type="text" value={formData.remarks} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>
                <input type="submit" value="Submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {submittedData.length > 0 && (
        <div>
          <h2>Submitted Information</h2>
          <table className="submitted-info-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Faculty</th>
                <th>Communication Skills</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.courseName}</td>
                  <td>{data.faculty}</td>
                  <td>{data.communicationSkills}</td>
                  <td>{data.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FeedBackForm;
