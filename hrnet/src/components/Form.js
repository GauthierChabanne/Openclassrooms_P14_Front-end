import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { States } from "../database/States";
import { Departments } from "../database/Departments";
import { useDispatch } from "react-redux";
import { addEmployee } from "../outils/employeesSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Modal } from "gauthiermodalplugin";
import '../styles/Form.css';

/**
 * The form used to create an employee.
 * @component
 * @example
 * return (
 *  <Form />
 * )
 */

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setbirthDate] = useState(new Date('January 1, 1995 03:24:00'));
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [etat, setEtat] = useState("");
  const [zip, setZip] = useState(0);
  const [department, setDepartment] = useState("");

  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  /* function that will hide the modal */
  const toggleModal = () => setModal(!modal);

  /* function that will start when the form is submitted */
  const handleSubmit = (e) => {
    /* prevent page from reloarding */
    e.preventDefault();
    /* recuperate all the datas of the form */
    let newUser = {
      id: nanoid(),
      prénom: firstName,
      nom: lastName,
      birth: birthDate,
      départ: startDate,
      rue: street,
      ville: city,
      etat: etat,
      zip: zip,
      departement: department,
    };
    // Add form's data to redux store, and create a new employee.
    dispatch(addEmployee(newUser));

    // Clean form fields
    setFirstName("");
    setLastName("");
    setStreet("");
    setCity("");
    setEtat("");
    setZip("");
    setDepartment("");

    // Make sure to hide the modal to allow her to be open when clicking on save
    toggleModal();
  };

  return (
    <div className="form-container">
      <div className="form-container__header">
        <h1>Create Employee</h1>
      </div>

      <form
        action=""
        className="form"
        onSubmit={handleSubmit}
      >
        <div className="form__input">
          <label htmlFor="firstName">
            First Name
          </label>

          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>

        <div className="form__input">
          <label htmlFor="LastName">
            Last Name
          </label>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="form__input" >
          <p>Date of Birth</p>
          <DatePicker
            selected={birthDate}
            onChange={(date) => setbirthDate(date)}
            value={birthDate}
          />
        </div>
        <div className="form__input">
          <p>Start Date</p>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            value={startDate}
          />
        </div>

        <fieldset className="form__adress-part">
          <legend>
            Address
          </legend>
          <div className="form__input">
            <label htmlFor="Street">
              Street
            </label>

            <div>
              <input
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                type="text"
                placeholder="Street"
              />
            </div>
          </div>

          <div className="form__input">
            <label htmlFor="City">
              City
            </label>

            <div>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder="City"
              />
            </div>
          </div>

          <div className="form__input">
            <label htmlFor="etat">
              States
            </label>
            <select
              value={etat}
              onChange={(e) => setEtat(e.target.value)}
              id="etat"
            >
              {States.map((state) => {
                return (
                  <option value={state.abbreviation} key={state.name}>
                    {state.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form__input">
          <label htmlFor="zip">
            Zip Code
          </label>
          <input
            type="number"
            id="zip"
            name="zip"
            min="-100000"
            max="10000000"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>

        </fieldset>

        <div className="form__input">
          <label htmlFor="Department">
            Department
          </label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            id="Department"
          >
            {Departments.map((Department) => {
              return (
                <option value={Department.name} key={Department.name}>
                  {Department.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="save-button">
          <button
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
       <Modal open={modal} onClose={toggleModal} />
    </div>
  );
};

export default Form;
