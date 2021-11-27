import { query } from "express-validator";

const ColorIndexValidation = [
  query("page")
    .exists({
      checkFalsy: true,
    })
    .withMessage("Page must not be empty")
    .bail()
    .custom((page) => {
      if (isNaN(page)) {
        throw new Error("Page is not a correct number");
      }
      if (page <= 0) {
        throw new Error("Page must be major than zero");
      }
      return true;
    }),
  query("qty")
    .exists({
      checkFalsy: true,
    })
    .withMessage("Qty must not be empty")
    .bail()
    .custom((qty) => {
      if (isNaN(qty)) {
        throw new Error("Qty is not a correct number");
      }
      if (qty <= 0) {
        throw new Error("Qty must be major than zero");
      }
      return true;
    }),
];

export default ColorIndexValidation;
