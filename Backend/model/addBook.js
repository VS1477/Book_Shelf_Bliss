import mongoose from "mongoose"


const addbook = new mongoose.Schema({
    bookname: {
        type: String,
        required : true
    },
    authorname : {
        type: String,
        required : true
    },
});

export const AddBook = mongoose.model("AddBook",addbook);