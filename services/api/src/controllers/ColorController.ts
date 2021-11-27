import { Request, Response } from "express";
import Color from "../models/Color";
import { StatusCodes } from "http-status-codes";
import { validationResult } from "express-validator";

class UserController {
  index = async (req: Request, res: Response) => {
    const sanitizeErrors = validationResult(req);
    if (!sanitizeErrors.isEmpty()) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ errors: sanitizeErrors.array() });
    }

    try {
      let page: any = req.query.page;
      page = parseInt(page);
      const qty: any = req.query.qty || 5;

      const offset: any = (page - 1) * qty;
      const limit: any = qty;

      const total_elements: number = await Color.count();

      let number_pages: any = total_elements / qty;
      number_pages = parseInt(number_pages);
      number_pages += total_elements % qty > 0 ? 1 : 0;

      if (number_pages < page) {
        res.status(StatusCodes.BAD_REQUEST).json({
          error: `Page ${page} does not exist`,
        });
      }

      let colors = await Color.findAll({
        attributes: ["id", "name", "color"],
        limit,
        offset,
      });

      res.status(StatusCodes.OK);
      if (req.query.type != "xml") {
        res.json({
          page,
          number_pages,
          total_elements,
          colors,
        });
      } else {
        let xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          "<response>",
          `<page>${page}</page>`,
          `<number_pages>${number_pages}</number_pages>`,
          `<total_elements>${total_elements}</total_elements>`,
        ];
        xml.push("<colors>");
        for (const color of colors) {
          xml.push("<color>");
          for (const [key, value] of Object.entries(color.toJSON())) {
            xml.push(`<${key}>${value}</${key}>`);
          }
          xml.push("</color>");
        }
        xml.push("</colors>");
        xml.push("</response>");
        res.type("xml").send(xml.join(""));
      }
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Problems with database");
    }
  };
  edit = async (req: Request, res: Response) => {
    const sanitizeErrors = validationResult(req);
    if (!sanitizeErrors.isEmpty()) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ errors: sanitizeErrors.array() });
    }

    try {
      const color = await Color.findByPk(req.params.id, {
        attributes: ["id", "name", "year", "color", "pantone_value"],
      });
      if (!color) {
        return res.status(StatusCodes.NOT_FOUND).json({
          error: "Color id does not exist",
        });
      }

      res.status(StatusCodes.OK);
      if (req.query.type != "xml") {
        res.json(color);
      } else {
        let xml = ['<?xml version="1.0" encoding="UTF-8"?>'];
        xml.push("<color>");
        for (const [key, value] of Object.entries(color.toJSON())) {
          xml.push(`<${key}>${value}</${key}>`);
        }
        xml.push("</color>");
        res.type("xml").send(xml.join(""));
      }
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Problems with database");
    }
  };
  store = async (req: Request, res: Response) => {
    const sanitizeErrors = validationResult(req);
    if (!sanitizeErrors.isEmpty()) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ errors: sanitizeErrors.array() });
    }

    try {
      await Color.create({
        name: req.body.name,
        year: req.body.year,
        color: req.body.color,
        pantone_value: req.body.pantone_value,
      });
      res.status(StatusCodes.OK).json({
        message: "Color created sucessfully",
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Problems with database");
    }
  };
}

export default new UserController();
