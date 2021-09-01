import {Router} from "express";

import registerRoute from './register'
import loginRoute from './login'
let router = Router();

router.use('/register', registerRoute)
router.use('/login', loginRoute)

export = router;