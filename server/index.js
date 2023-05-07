import express from "express";
import Connection from "./database/db.js";
import Routes from "./routes/route.js";

import cors from 'cors'
import bodyParser from "body-parser";

const app = express();

//middlewares
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Routes);

const port = process.env.PORT || 7000 ;

//creating server
app.listen(port,()=>{
    console.log(`Server is successfully running at port ${port}`);
})