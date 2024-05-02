import React from 'react';

function Contact() {
  return (
    <>
        <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px] ">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"/>
            </div>
            <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"/>
            </div>
            <div className="mt-4 space-y-2">
                <span>Query</span>
                <br />
                <input
                  type="text-area"
                  placeholder="Enter your query"
                  className="w-80 px-3 py-1 border rounded-md outline-none"/>
            </div>
        </div>
        </div>
        </div>
    </>
  );
}

export default Contact;
