import bcrypt from 'bcrypt'
import Users from '../models/Users'
import ExpressInterface from '../interface/Express'

export async function createUser({req, res}: ExpressInterface) {
    let { username, email, password } = req.body;
    let saltRounds: number = 10;

    bcrypt.genSalt(saltRounds, (err, salts) => {
        bcrypt.hash(password, salts, async(err, hash) => {
            await Users.create({
                username: username,
                email: email,
                password: password
            })
            .then((docs) => {
                res.json(docs)
            })
            .catch((err) => {
                console.error(err);
            })
        })
    })
}

export async function loginUser({req, res}: ExpressInterface) {
    let { username, password } = req.body;

    await Users.findOne({ username: username }).exec((err, docs) => {
        if(docs) {
            bcrypt.compare(password, docs?.password, (err, results) => {
                res.json(docs);
            })
        } 
    })
}