import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../outils/employeesSlice";

export default configureStore({
  reducer: {
    employees: employeesReducer,
  },
});
