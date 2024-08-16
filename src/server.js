const express = require("express")

const app = express()

app.post("/users", (request, response) => {

    response.send("Você está no metodo POST")
})

const PORT = 3333

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))