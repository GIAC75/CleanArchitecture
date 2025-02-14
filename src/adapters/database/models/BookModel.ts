import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelizeConfig";
import { AuthorModel } from "./AuthorModel";

// Definir los atributos
interface BookAttributes {
  id: number;
  title: string;
}

interface BookCreationAttributes extends Optional<BookAttributes, "id"> {}

export class BookModel extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public id!: number;
  public title!: string;

  // Relación con autores
  public authors?: AuthorModel[];
}

BookModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "book",
    tableName: "books",
  }
);
