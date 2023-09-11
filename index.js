const express = require("express")
const app = express()

app.set('view engine', 'ejs')


app.get("/",(req,res)=>{

res.render("index")
})

const userRouter = require('./routess/users')

app.use("/users", userRouter)

app.listen(3001)
