import {Router} from 'express'
import multer from "multer";
import {createSocialUser, updateSocialUser, fetchAllSocialUsers, fetchSingleSocialUser, uploadCSV, fetchAllProducts} from '../Controller/SocialUserController.js'

const router = Router()
const upload = multer({ 
    storage: multer.memoryStorage(), 
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});


router.post('/createSocialUser', createSocialUser)
router.put('/updateSocialUser/:id', updateSocialUser)
router.get('/fetchAllSocialUsers', fetchAllSocialUsers)
router.get('/fetchSingleSocialUser/:id', fetchSingleSocialUser)
router.get('/fetchAllProducts', fetchAllProducts)

router.post('/uploadCSV', upload.single('file'), (req, res, next) => {
    console.log("🔥 Request received at /api/product/uploadCSV");
    console.log("📌 Headers:", req.headers);
    console.log("📂 Body:", req.body);
    console.log("📝 File:", req.file); 
    next();
}, uploadCSV)


export default router