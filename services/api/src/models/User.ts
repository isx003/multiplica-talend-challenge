import connection from "../config/connection";
import { DataTypes, Model } from "sequelize";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    sequelize: connection,
    tableName: "users",
    paranoid: true
  }
);

export default User;
