import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Add from '../components/Add';

function Adds() {
  return (
    <>
    <Navbar/>
    <div className=' min-h-screen '>
        <Add/>
    </div>
    <Footer/>
    </>
  )
}

export default Adds;
