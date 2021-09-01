import express from 'express';
const app: express.Express = express();
import cors from 'cors' 
import helmet from 'helmet'
import router from './routes';
import ExpressInterface from './interface/Express';
import morgan from 'morgan';
import session from 'express-session'

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'))
app.use(session({
    secret: 'secret token',
    resave: false,
    saveUninitialized: true
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//GET ALL
app.get('/', ({req, res}: ExpressInterface) => {
    res.send("Hi")
})

app.use(router)

export default app;