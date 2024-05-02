import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import addRoute from "./route/addbookRoute.js"


const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI; 


try {
    mongoose.connect(URI);
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}


app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/add",addRoute);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});