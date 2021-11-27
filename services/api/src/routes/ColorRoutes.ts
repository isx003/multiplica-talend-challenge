import express from "express";
import ColorController from "../controllers/ColorController";
import ColorEditvalidation from "../validations/ColorEditvalidation";
import ColorIndexValidation from "../validations/ColorIndexValidation";
import ColorStoreValidation from "../validations/ColorStoreValidation";

const router = express.Router();

export default () => {
  router.get("/", ColorIndexValidation, ColorController.index);
  router.post("/", ColorStoreValidation, ColorController.store);
  router.get("/:id", ColorEditvalidation, ColorController.edit);
  return router;
};
