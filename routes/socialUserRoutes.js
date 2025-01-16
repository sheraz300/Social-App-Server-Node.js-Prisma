import {Router} from 'express'

import {createSocialUser, updateSocialUser, fetchAllSocialUsers, fetchSingleSocialUser} from '../Controller/SocialUserController.js'

const router = Router()

router.post('/createSocialUser', createSocialUser)
router.put('/updateSocialUser/:id', updateSocialUser)
router.get('/fetchAllSocialUsers', fetchAllSocialUsers)
router.get('/fetchSingleSocialUser/:id', fetchSingleSocialUser)

export default router