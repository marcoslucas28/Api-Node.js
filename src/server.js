const express = require("express")

const app = express()

app.get("/message/:id/:name", (request, response) => {// ':id/:name' são informações passadas para o GET atraves da URL
    const { id, name } = request.params//pegando os paramentros 'id' e 'name'

    response.send(`Mensagem ID: ${id}. Para ${name}`)
})

app.get("/users", (request, response) => {// com o Query Params os elementos são passados na URL desse jeito 'servidor/users?page=2&limit=30'
    const { page, limit } = request.query//pegando os paramentros 'page' e 'limit'

    response.send(`Página: ${page}. Limite: ${limit}`)
})

const PORT = 3333

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))