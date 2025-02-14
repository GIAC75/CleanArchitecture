import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelizeConfig";
import { BookModel } from "./BookModel";

// Definir los atributos
interface AuthorAttributes {
  id: number;
  name: string;
}

interface AuthorCreationAttributes extends Optional<AuthorAttributes, "id"> {}

export class AuthorModel extends Model<AuthorAttributes, AuthorCreationAttributes> implements AuthorAttributes {
  public id!: number;
  public name!: string;

  // Relación con libros
  public books?: BookModel[];
}

AuthorModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "author",
    tableName: "authors",
  }
);
