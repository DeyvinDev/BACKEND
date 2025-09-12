
const express = require('express')

const app = express()

const cors = require('cors')

app.use(cors())


app.use((req, res, next) =>{
    console.log("####### Requisição chegou ######")
    console.log("Time: ", new Date().toLocaleString())
    console.log("metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
})

app.get("/hello", (req, res ,next) =>{
    res.send("Hello atualizado!!!")
})


const calculadoraNotaRouter = require('./routes/calculadora')

app.use("/", calculadoraNotaRouter)


app.listen(3000, () =>{
    console.log("API rodando em http://localhost:3000")
}) 

