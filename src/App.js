import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Components/Dashboard/Dashboard';
import Home from './Pages/Components/Home/Home';
import Login from './Pages/Components/Login/Login';
import SignUp from './Pages/Components/Login/SignUp';
import Purchase from './Pages/Components/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/purchase" element={<Purchase></Purchase>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
