import { Router } from "express";
import { CreateDevController } from "../modules/desenvolvedores/useCases/createDev/CreateDevController";
import { EditDevController } from "../modules/desenvolvedores/useCases/editDev/EditDevController";
import { ListDevController } from "../modules/desenvolvedores/useCases/listDev/ListDevController";
import { RemoveDevController } from "../modules/desenvolvedores/useCases/removeDev/RemoveDevController";


const devsRoutes = Router()

const createDevController = new CreateDevController()
const listDevController = new ListDevController()
const removeDevController = new RemoveDevController()
const ediDevController = new EditDevController()

devsRoutes.post("/", createDevController.handle)
devsRoutes.get("/list", listDevController.handle)
devsRoutes.delete("/remove/:id", removeDevController.handle)
devsRoutes.put("/edit/:id", ediDevController.handle)

export {devsRoutes}