import dotenv from 'dotenv';
import express from 'express';
import conectDB from './db/index.js';


dotenv.config({
    path: './.env',
})

conectDB();

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello World");
})



// console.log(process.env.conectionURL);

