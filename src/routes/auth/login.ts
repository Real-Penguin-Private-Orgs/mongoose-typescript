import {Router} from "express";
import { loginUser } from "../../controller/User.controller";
let router = Router();

router.post('/', loginUser)

export = router;