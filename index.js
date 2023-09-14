const express = require("express")
const {json} = require("express")
const connect = require("./database/database")
const app = express()
const personRouter = require("./router/personRouter")
const port =   process.env.PORT || 4000
connect()
app.use(json())
app.use("/", personRouter)
app.get("/",(req,res)=>{
    res.send("hello everyone")
    
})
app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})