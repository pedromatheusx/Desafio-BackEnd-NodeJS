import { Router } from "express";
import { CreateNivelController } from "../modules/niveis/useCases/createNivel/CreateNivelController";
import { EditNivelController } from "../modules/niveis/useCases/editNivel/EditNivelController";
import { ListNivelController } from "../modules/niveis/useCases/listNivel/ListNivelController";
import { RemoveNivelController } from "../modules/niveis/useCases/removeNivel/RemoveNivelController";


const nivelsRoutes = Router()

const createNivelController = new CreateNivelController()
const listNivelController = new ListNivelController()
const editNivelController = new EditNivelController()
const removeNivelController = new RemoveNivelController()


nivelsRoutes.post("/", createNivelController.handle)
nivelsRoutes.get("/list", listNivelController.handle)
nivelsRoutes.put("/edit/:id", editNivelController.handle)
nivelsRoutes.delete("/remove/:id", removeNivelController.handle)

export {nivelsRoutes}