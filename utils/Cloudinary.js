import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
cloudinary.config({
    cloud_name: 'dqtmh0jt5',
    api_key: '431863595124976',
    api_secret: '23gB2d2d8pQvrwIOy36eT4hFszA'
});


const CloudinaryData = async (url) => {
    try {
        const respones = await cloudinary.uploader.upload(url, {
            resource_type: "auto",
        })

        if (!respones) {
            fs.unlinkSync(url);
        }
        return respones;
    } catch (err) {
        if (err) {
            fs.unlinkSync(url);
            return null;
        }
    }
}

export { CloudinaryData };