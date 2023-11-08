import '../styles/CreateEmploye.css';
import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

function CreateEmploye() {
  return(
    <div>
      <div className="w-full h-[80px] bg-gray-800 text-slate-100 flex justify-center items-center">
        <h1>HRnet</h1>
        <div className="border-solid border-2 border-stone-300">
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
