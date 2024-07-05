import mongoose from 'mongoose'
import { dbName } from '../constants.js';


const conectDB = async () => {
    try{
        const conectionInstence = await mongoose.connect(`${process.env.conectionURL}/${dbName}`)
        console.log(`mongoDB is connecte ${conectionInstence.connection.db.database}`)
        // console.log(conectionInstence.connection.host);
    }
    catch(error){
        console.log("MongoDB conection Faild ", error);
    }
}

export default conectDB;