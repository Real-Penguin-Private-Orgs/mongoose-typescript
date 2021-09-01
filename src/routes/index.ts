import {Router} from "express";

import apiRoutes from './api/index';
let router = Router();

router.use('/api', apiRoutes)

export = router;