import { Request, Response } from "express";
import User from "../models/User";

class UserController {
  index = async (req: Request, res: Response) => {
    const users = await User.findAll();
    res.render("users/index", { users });
  };
}

export default new UserController();
