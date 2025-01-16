import {Router} from 'express'

import {createSocialUser, updateSocialUser, fetchAllSocialUsers} from '../Controller/SocialUserController.js'

const router = Router()

router.post('/createSocialUser', createSocialUser)
router.put('/updateSocialUser/:id', updateSocialUser)
router.get('/fetchAllSocialUsers', fetchAllSocialUsers)

export default router