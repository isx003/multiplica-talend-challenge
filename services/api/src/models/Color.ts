import connection from "../config/connection";
import { DataTypes, Model } from "sequelize";

class Color extends Model {}

Color.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    year: DataTypes.STRING,
    color: DataTypes.STRING,
    pantone_value: DataTypes.STRING
  },
  {
    sequelize: connection,
    tableName: "colors"
  }
);

export default Color;
