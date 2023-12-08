import { CloudinaryData } from '../../utils/Cloudinary.js';
import { ApiError } from '../../utils/ApiError.js';
const UserHandler = async (req, res) => {
    const { firstName, email, mobileNumber } = req.body;

    const uploadAvatar = await CloudinaryData(req.files?.avatar[0]?.path);
    if (!uploadAvatar) {
        throw new ApiError(404, "Upload avatar failed", "Retry agian...", req.method);
    }
    res.send(`${uploadAvatar?.url}`);
}

export default UserHandler;