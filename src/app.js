import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import ejs from 'ejs';
import router from './Router/Router.js';
import { ApiError } from '../utils/ApiError.js'
dotenv.config({
    path: '../.env',
})

const app = express();
app.use(cors());
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join('public')));
app.set('view engine', 'ejs');
app.use('/api/v1', router, (req, res) => {
    const Response = new ApiError(404, "Not Found url", req.url, req.method);
    res.status(404).json(Response);
})


export default app;
