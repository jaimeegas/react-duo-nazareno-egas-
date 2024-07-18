  // src/Students.js
import React from "react";

const Students = () => {
  // Data Setup
  const students = [
    {
      name: "Cynthia Kenny",
      department: "Arts",
      finalGrade: 90,
      status: "Pass",
    },
    {
      name: "Bethy Max",
      department: "Science",
      finalGrade: 85,
      status: "Pass",
    },
    {
      name: "Bren Aloe",
      department: "Commerce",
      finalGrade: 87,
      status: "Pass",
    },
    {
      name: "Shem Graham",
      department: "Science",
      finalGrade: 87,
      status: "Pass",
    },
    {
      name: "Drick Lim",
      department: "Science",
      finalGrade: 84,
      status: "Pass",
    },
    {
      name: "Wenny Abraham",
      department: "Arts",
      finalGrade: 86,
      status: "Pass",
    },
    {
      name: "Travis Scott",
      department: "Commerce",
      finalGrade: 99,
      status: "Pass",
    },
    {
      name: "Sam Lacy",
      department: "Science",
      finalGrade: 87,
      status: "Pass",
    },
    {
      name: "Darwin Sy",
      department: "Commerce",
      finalGrade: 0,
      status: "Fail",
    },
    {
      name: "Katy Finn",
      department: "Arts",
      finalGrade: 0,
      status: "Fail",
    },
  ];

  // Component Implementation (Student)
  const Student = ({ student, index }) => (
    <tr>
      <td>{index + 1}</td>
      <td>{student.name}</td>
      <td>{student.department}</td>
      <td>{student.status === "Pass" ? student.finalGrade : ""}</td>
      <td>{student.status}</td>
    </tr>
  );

  // Rendering
  return (
    <div className="container">
      <h1>Students Record</h1>
      <table border="1">
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Names</th>
            <th>Department</th>
            <th>Final Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <Student key={index} student={student} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
