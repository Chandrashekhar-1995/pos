import { Router } from "express";
import {getItemController, addItemController} from "../controllers/item.controller.js"

const router = Router();


router.route("/get-item").get(getItemController)
router.route("/add-item").post(addItemController)


export default router;