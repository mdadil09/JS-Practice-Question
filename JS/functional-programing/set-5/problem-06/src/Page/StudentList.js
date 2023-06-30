/* Create an array of objects representing students in a class. Each object has the following 
properties: id, name, grade, and attendance. Write a React component that takes the array 
of students as input and generates an ordered list of students, where each list item
displays the student's name, grade, and attendance. */

import React from "react";
import { students } from "../data";
import "./index.css";

const StudentList = () => {
  return (
    <div className="container">
      <h2>Student's List</h2>
      <ol className="responsive-table">
        <li className="table-header">
          <div className="col col1">ID</div>
          <div className="col col2">Name</div>
          <div className="col col3">Grade</div>
          <div className="col col4">Attendance</div>
        </li>
        {students.map((student) => (
          <li className="table-row" key={student.id}>
            <div className="col col1" data-label="ID">
              {student.id}
            </div>
            <div className="col col2" data-label="Name">
              {student.name}
            </div>
            <div className="col col3" data-label="Grade">
              {student.grade}
            </div>
            <div className="col col4">{student.attendance}</div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StudentList;
