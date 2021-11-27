import express from "express";
import UserController from "../controllers/UserController";

const router = express.Router();

export default () => {
  router.get("/", UserController.index);
  return router;
};
