import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Navbar from './page/Shared/Navbar';
import Register from './page/Login/Register';
import Blog from './page/Blog/Blog';
import Purchase from './page/Home/Purchase';
import NotFound from './page/NotFound/NotFound';
import RequireAuth from './page/Login/RequireAuth';
import Portfolio from './page/Portfolio/Portfolio';
import Dashboard from './page/Dashboard/Dashboard';
import MyOrders from './page/Dashboard/MyOrders';
import MyProfile from './page/Dashboard/MyProfile';
import AddAReview from './page/Dashboard/AddAReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './page/Dashboard/Users';
import RequireAdmin from './page/Login/RequireAdmin';
import Body from './page/ResumeBuilder/Body/Body';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        {/* <Route path='/blog' element={<Blog />}></Route> */}
        <Route path='resumebuilder' element={<Body></Body>}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/purchase/:productId' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrders />}></Route>
          <Route path='/dashboard/myreview' element={<AddAReview />}></Route>
          <Route path='/dashboard/myprofile' element={<MyProfile />}></Route>
          <Route path='/dashboard/users' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
