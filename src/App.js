
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProducts from './Pages/Components/Dashboard/AddProducts';
import Dashboard from './Pages/Components/Dashboard/Dashboard';
import MakeAdmin from './Pages/Components/Dashboard/MakeAdmin';
import ManageOrders from './Pages/Components/Dashboard/ManageOrders';
import ManageProducts from './Pages/Components/Dashboard/ManageProducts';
import MyProfile from './Pages/Components/Dashboard/MyProfile';
import MyReview from './Pages/Components/Dashboard/MyReview';
import Orders from './Pages/Components/Dashboard/Orders';
import Payment from './Pages/Components/Dashboard/Payment';
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
        <Route path="/:id" element={<Purchase></Purchase>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<Orders></Orders>}></Route>
          <Route path="myReview" element={<MyReview></MyReview>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="addProducts" element={<AddProducts></AddProducts>}></Route>
          <Route path="manageOrders" element={<ManageOrders></ManageOrders>}></Route>
          <Route path="manageProducts" element={<ManageProducts></ManageProducts>}></Route>
          <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
