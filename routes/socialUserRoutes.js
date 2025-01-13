import {Router} from 'express'

import {createSocialUser} from '../Controller/SocialUserController.js'

const router = Router()

router.post('/createSocialUser', createSocialUser)

export default router