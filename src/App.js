import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import EmployeeList from './pages/EmployeeList/EmployeeList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<CreateEmployee />} />
        <Route path='/employee-list' element={<EmployeeList />} />
      </Routes>
  </Router>
  );
}

export default App;
