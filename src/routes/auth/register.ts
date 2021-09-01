import {Router} from "express";
import { createUser } from "../../controller/User.controller";
let router = Router();

router.post('/', createUser)

export = router;