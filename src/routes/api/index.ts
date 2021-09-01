import {Request, Response, Router} from "express";
import ExpressInterface from "../../interface/Express";
import Users from '../../models/Users'
let router = Router();

router.get('/', ({req, res}: ExpressInterface) => {
    Users.find({}).exec((err, docs) => {
        if(err) throw err;
        res.json(docs);
    })
})

export = router;