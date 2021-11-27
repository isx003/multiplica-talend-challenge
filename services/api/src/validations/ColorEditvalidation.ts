import { param } from "express-validator";

const ColorEditvalidation = [
  param("id")
    .exists({
      checkFalsy: true,
    })
    .withMessage("Color id must not be empty")
    .bail()
    .custom((id) => {
      if (isNaN(id)) {
        throw new Error("Color id is not a correct number");
      }
      if (id <= 0) {
        throw new Error("Color id must be major than zero");
      }
      return true;
    }),
];

export default ColorEditvalidation;
