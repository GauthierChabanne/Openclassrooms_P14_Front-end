import { Route, Routes } from 'react-router-dom';
import CreateEmploye from './pages/CreateEmploye';
import EmployeList from './pages/EmployeList';
import Error from './pages/Error';

function Routing(){
  return (
    <Routes>
      <Route path="/" element={<CreateEmploye />} />
      <Route path="/employelist" element={<EmployeList />} />
      <Route path="*" element={ <Error /> }/>
    </Routes>
  )
}

export default Routing
