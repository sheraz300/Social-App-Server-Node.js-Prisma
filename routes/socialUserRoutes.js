import {Router} from 'express'

import {createSocialUser, updateSocialUser} from '../Controller/SocialUserController.js'

const router = Router()

router.post('/createSocialUser', createSocialUser)
router.put('/updateSocialUser/:id', updateSocialUser)

export default router