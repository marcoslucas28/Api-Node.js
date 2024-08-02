const express = require("express")

const app = express()

app.get("/message/:id/:name", (request, response) => {// ':id/:name' são informações passadas para o GET atraves da URL
    const { id, name } = request.params//pegando os paramentros 'id' e 'name'

    response.send(`Mensagem ID: ${id}. Para ${name}`)
})

const PORT = 3333

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))