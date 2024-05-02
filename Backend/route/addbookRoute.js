import express from 'express'
import { sendBook } from '../controller/addbookController.js'

const router = express.Router();
router.post("/newbook",sendBook);

export default router;