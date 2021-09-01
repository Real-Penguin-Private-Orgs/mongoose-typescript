import {Router} from "express";
import ExpressInterface from '../../interface/Express'
let router = Router();

router.get('/', ({req, res}: ExpressInterface) => {
    req.session.destroy((err) => console.error(err));
})

export = router;