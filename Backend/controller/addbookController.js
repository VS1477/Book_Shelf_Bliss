import { AddBook } from "../model/addBook.js";
export const sendBook = async(req , res, next) =>{
    const{ bookname , authorname } = req.body;
    if( !bookname || !authorname){
        return res.status(400).json({ message: "Enter all the details" });

    }
    try{
        const newBook = await AddBook.create({
            bookname,
            authorname
        });
        res.status(200).json({
            success : true,
            message : "Request added successfully"
        });
    }catch(error){
        console.log("Error : ",error);
        res.status(400).json({message:"Error occurend"});
    }
};