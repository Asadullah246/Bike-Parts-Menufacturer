
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Components/Blogs/Blogs';
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
import Portfolio from './Pages/Components/Portfolio/Portfolio';
import Purchase from './Pages/Components/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar/Navbar';
import RequireAuth from './Pages/Shared/RequreAuth';

function App() {
 
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/:id" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<RequireAuth><Orders></Orders></RequireAuth>}></Route>
          <Route path="myReview" element={<RequireAuth><MyReview></MyReview></RequireAuth>}></Route>
          <Route path="myProfile" element={<RequireAuth><MyProfile></MyProfile></RequireAuth>}></Route>
          <Route path="addProducts" element={<RequireAuth><AddProducts></AddProducts></RequireAuth>}></Route>
          <Route path="manageOrders" element={<RequireAuth><ManageOrders></ManageOrders></RequireAuth>}></Route>
          <Route path="manageProducts" element={<RequireAuth><ManageProducts></ManageProducts></RequireAuth>}></Route>
          <Route path="makeAdmin" element={<RequireAuth><MakeAdmin></MakeAdmin></RequireAuth>}></Route>
          <Route path="payment/:id" element={<RequireAuth><Payment></Payment></RequireAuth>}></Route>
        </Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
      </Routes>

     
    </div>
  );
}

export default App;
