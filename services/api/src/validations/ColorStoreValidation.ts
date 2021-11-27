import { check } from "express-validator";

const ColorStoreValidation = [
  check("name")
    .trim()
    .escape()
    .exists({
      checkFalsy: true,
    })
    .withMessage("Name must not be empty")
    .bail()
    .custom((name) => {
      console.log(name);
      if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑüÜ'\s]+$/.test(name)) {
        throw new Error("Name must be alphabetic");
      }
      return true;
    }),
  check("year")
    .exists({
      checkFalsy: true,
    })
    .withMessage("Year must not be empty")
    .bail()
    .custom((year) => {
      if (isNaN(year)) {
        throw new Error("Year is not a correct number");
      }
      if (year <= 0) {
        throw new Error("Year must be major than zero");
      }
      return true;
    }),
  check("color")
    .exists({
      checkFalsy: true,
    })
    .withMessage("Color must not be empty")
    .bail()
    .custom((color) => {
      if (!/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(color)) {
        throw new Error("Color incorrect hexadecimal format");
      }
      return true;
    }),
  check("pantone_value")
    .exists({
      checkFalsy: true,
    })
    .withMessage("Pantone must not be empty")
    .bail()
    .custom((pantone_value) => {
      if (!/^[0-9]{2}-[0-9]{4}$/.test(pantone_value)) {
        throw new Error("Pantone incorrec format");
      }
      return true;
    }),
];

export default ColorStoreValidation;
