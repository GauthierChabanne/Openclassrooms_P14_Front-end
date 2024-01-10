import '../styles/CreateEmploye.css';
import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

/**
 * The page allowing to create an Employee.
 * @component
 * @example
 * return (
 *  <CreateEmploye />
 * )
 */

function CreateEmploye() {
  return(
    <div className="container">
      <div className="form-header">
        <h1>HRnet</h1>
        <div className="">
          <Link to="/employelist" className="cursor-pointer ">
            --View Current Employees--
          </Link>
        </div>
      </div>
      <Form />
    </div>
  )
}

export default CreateEmploye;
