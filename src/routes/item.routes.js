import { Router } from "express";
import {getItemController} from "../controllers/item.controller.js"

const router = Router();


router.route("/get-item").get(getItemController)

export default router;