import { Router } from "express";
import {mysql} from '../db/db.js'
import { ping } from "../controllers/index.controller.js";
const router = Router()

router.get('/ping', ping)

export default router