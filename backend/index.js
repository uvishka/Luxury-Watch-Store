import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import watchesRoute from './routes/watchesRoute.js';
import cors from 'cors';
import usersRoute from './routes/usersRoute.js';
import adminusersRoute from './routes/adminusersRoute.js';



const app = express();

//Middileware for parsing request body
app.use(express.json());

//Middleware for handling cors policy
app.use(cors());


app.get('/', (request, response)=>{
    console.log(request)
    return response.status(234).send('Welcome to Luxury Watch Store');
});

app.use('/watches', watchesRoute);
app.use('/users', usersRoute);
app.use('/admins',adminusersRoute);



mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to database');
    app.listen(PORT,()=>{
        console.log(`App is listening to port :${PORT}`);
    });
})
.catch((error)=>{ 
    console.log(error);
});