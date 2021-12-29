import { Router } from "express";
import { devsRoutes } from "./devs.routes";
import { nivelsRoutes } from "./nivels.routes";


const router = Router()

router.use("/nivel", nivelsRoutes)
router.use("/desenvolvedor", devsRoutes)

export {router}