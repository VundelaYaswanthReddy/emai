const express  = require('express')
const app = express()

const mongoose = require('mongoose')

app.use(express.json())
app.use(express.urlencoded())

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.nucrbbe.mongodb.net/?retryWrites=true')
.then(()=> console.log("Connected to db"))
.catch((err)=> console.log('Unable to connect to db'))

names=[{name:"surya"}]

app.post('/newname',(req,res)=>{

    peru= req.body
    names.push(peru)
    res.send(201)

})

app.get('/names',(req,res)=>{
    res.send(names)
})

const port = 8000;


app.listen(port,()=>{
    console.log("App is running on our port : ",port)
})