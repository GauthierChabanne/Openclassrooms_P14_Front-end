import '../styles/EmployeList.css';
import React from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table";

function EmployeList() {

  return (
    <div className="container">
        <h1 className="employee-header">Current Employees</h1>
      <Table />
      <Link className="home-link" to="/">Home</Link>
    </div>
  );
}

export default EmployeList;
