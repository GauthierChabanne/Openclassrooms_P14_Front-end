import '../styles/EmployeList.css';
import React from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table";

/**
 * The form used to show all employees.
 * @component
 * @example
 * return (
 *  <EmployeList />
 * )
 */

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
