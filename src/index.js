import dotenv from 'dotenv';
import app from './app.js';
import { ConnectionDB } from './DB/DataBase.main.js';
import { DATA_BASE_NAME } from './constant.js';

dotenv.config({
    path: './.env',
})

ConnectionDB(`${process.env.DATA_BASE_URL}/${DATA_BASE_NAME}`).then(() => {
    app.listen(process.env.PORT, (err, data) => {
        if (err) return { fileName: 'index.js', error: err };
        console.log(`Index.js listening on ${process.env.PORT}`);
    })
})
