import app from './app';
import * as dotenv from 'dotenv';
dotenv.config();
let port: number  = 8080 || process.env.PORT;

import { connect } from 'mongoose'

run()
.then(() => {
    console.log(`Connected to ${process.env.MONGODB}`)
})
.catch((err) => {
    console.error(err);
})

async function run(): Promise<void> {
    await connect(process.env.MONGODB as string)
}

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
})