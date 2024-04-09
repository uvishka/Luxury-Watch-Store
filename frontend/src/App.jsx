import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CcreateWatches from './pages/CcreateWatches'
import EditWatches from './pages/EditWatches'
import DeleteWatches from './pages/DeleteWatches'
import ShowWatch from './pages/ShowWatch'
import Login from './pages/Login';
import Register from './pages/Register';
import Book from './pages/BookAppointment'
import AdminLogin from './pages/AdminLogin'
import AdminRegister from './pages/AdminRegister'
import HomeUser from './pages/HomeUser';
import ShowWatchAdmin from './pages/ShowWatchAdmin'
import Welcome from './pages/Welcome'



const App = () => {
  return (
    <Routes>
      <Route path= '/welcome' element={<Welcome/>}/>
      <Route path= '/' element={<Home />}/>
      <Route path= '/homeusers' element={<HomeUser/>}/>
      <Route path= '/watches/create' element={<CcreateWatches />}/>
      <Route path= '/watches/details/:id' element={<ShowWatch />}/>
      <Route path= '/watches/detailsadmin/:id' element={<ShowWatchAdmin/>}/>
      <Route path= '/watches/edit/:id' element={<EditWatches />}/>
      <Route path= '/watches/delete/:id' element={<DeleteWatches />}/>
      <Route path= '/users/login' element={<Login/>}/>
      <Route path= '/users/register' element={<Register/>}/>
      <Route path= '/watches/booking/:id' element={<Book/>}/>
      <Route path= '/admins/adminlogin' element={<AdminLogin/>}/>
      <Route path= '/admins/adminregister' element={<AdminRegister/>}/>
      


    </Routes>
  )
}

export default App