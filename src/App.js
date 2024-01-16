import React from 'react';
import './App.css';
import Navbar from './Layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Home from './Pages/Home';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Showuser from './User/Showuser';
import Adduser from './User/Adduser';
import Errorpage from './Pages/Errorpage';
import DeleteUser from './User/Deleteuser';
import UpdateUser from './User/Updateuser';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/showuser' element={<Showuser />} />
          <Route path='/adduser' element={<Adduser />} />
          <Route path='/user/updateuser/:employeeId' element={<UpdateUser/>}/>
          <Route path='/user/deleteuser/:employeeId' element={<DeleteUser />} />
          <Route path='*' element={<Errorpage />} />

        </Routes>


      </BrowserRouter>



    </div>
  );
}

export default App;
