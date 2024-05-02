import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Add = () => {
  const [bookname,SetBook] = useState("");
  const [authorname,SetAuthor] = useState("");  
  const navigate = useNavigate();

  const newBook = async (e) =>{
    e.preventDefault();


    try{
      const {data}=  await axios.post(
        "http://localhost:4001/add/newbook",
        {bookname,authorname},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      SetAuthor("");
      SetBook("");
      navigate("/");
    }catch(error) {
        toast.error(error.response.data.message);
    }

  }
  
  return (
    <>
        <div className="flex h-screen items-center justify-center">
            <div>
        <h1 className=' text-4xl font-bold'>Enter the details of the book you wants to add</h1>
        </div>
        <div className=" w-[600px] ">
        <div className="modal-box">
          <form onSubmit={newBook}>
          <h3 className="font-bold text-lg">Add Books</h3>
            <div className="mt-4 space-y-2">
                <span>Book Name</span>
                <br />
                <input
                  type="text"
                  value={bookname}
                  placeholder="Enter the book name"
                  onChange={(e)=> SetBook(e.target.value)}
                  className="w-80 px-3 py-1 border rounded-md outline-none"/>
            </div>
            <div className="mt-4 space-y-2">
                <span>Author Name</span>
                <br />
                <input
                  type="text"
                  value={authorname}
                  placeholder="Enter the author name"
                  onChange={(e)=>SetAuthor(e.target.value)}
                  className="w-80 px-3 py-1 border rounded-md outline-none"/>
            </div>
            <div className="flex justify-around mt-6">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Add Book
              </button>
              </div>

          </form>
            
        </div>
        </div>
        </div>
    </>
  );
}

export default Add;
