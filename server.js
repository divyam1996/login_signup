import express from "express";
import connection from "./dbconnection.js";
import cors from 'cors'
import router from "./router/route.js";
// import dotenv from 'dotenv';
//import defaultData from "./default.js";
const app = express();

// dotenv.config();
//middleware
app.use(cors());
app.use(express.json());
app.use("/",router);  


const URL = "mongodb+srv://divyam17:mongodb@cluster0.rsxbfad.mongodb.net/?retryWrites=true&w=majority"
const PORT =  5000;



connection(URL);
app.listen(PORT, () => {
  console.log("Listening at port  5000");
});
//defaultData();