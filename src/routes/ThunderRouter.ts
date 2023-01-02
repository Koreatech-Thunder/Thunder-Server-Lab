import { Router } from "express";
import { ThunderController } from "../controllers";

const router: Router = Router();

router.post('/', ThunderController.createThunder);

export default router;