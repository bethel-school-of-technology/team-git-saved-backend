import { Router } from "express";
import {
  getAllParents,
  createParent,
  updateParent,
  deleteParent,
  getParent,
} from "../controllers/parentController";

const router = Router();

router.get("/", getAllParents);

router.post("/add", createParent);

router.put("/edit/:parentId", updateParent);

router.delete("/delete/:parentId", deleteParent);

router.get("/:parentId", getParent);

export default router;
