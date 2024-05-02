import React, { useEffect, useState} from 'react'
import axios from "axios";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      }catch (error){
          console.log(error);
      }
    };
    getBook();
   },[]);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className=' mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We are
             <span className=' text-blue-200'> Delighted </span>
              to have you <span className=' text-blue-200'>Here! :)</span>
              </h1>
              <p className=' mt-12'>
              Books are an irreplaceable asset to humanity.
               They are referred to as a man’s best friend and have helped mankind evolve.
                Books offer us so many things without asking for anything in return, and leave a deep impact on us.
                 Reading books helps us change our perspective of the world.
               Books are portable and can be read at any time, and are published in many languages and genres.
              </p>
              <Link to='/'>
              <button className=' bg-blue-200 text-white mt-6 px-4 py-2 rounded-md hover:bg-blue-400 duration-300'>Back</button>
              </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                book.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course;
