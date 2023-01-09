import { Router } from "express";
import { ThunderController } from "../controllers";

const router: Router = Router();

router.post('/', ThunderController.createThunder);
router.get("/", ThunderController.getThunderList);
router.get("/:postId", ThunderController.getThunder);

export default router;