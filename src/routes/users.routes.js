const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersController = new UsersController()

const usersRoutes = Router()

function myMiddlewares(request, response, next){
    if(!request.body.isAdmin){
        return response.json({message: "user unauthorized"})
    }

    next()
}

usersRoutes.post("/",myMiddlewares,usersController.create)

module.exports = usersRoutes