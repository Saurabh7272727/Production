import { Router } from "express";
import UserHandler from '../Controller/User.Sigin.handler.js';
import { upload } from '../Middleware/User.multer.js';

const router = Router();

router.route('/user').post(upload.fields([
    {
        name: "avatar",
        maxCount: 1
    }
]), UserHandler);



export default router;