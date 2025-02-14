import { AuthorModel } from "./AuthorModel";
import { BookModel } from "./BookModel";
import { sequelize } from "../sequelizeConfig";

// Definir la relación muchos a muchos
AuthorModel.belongsToMany(BookModel, { through: "AuthorBook", as: "books" });
BookModel.belongsToMany(AuthorModel, { through: "AuthorBook", as: "authors" });

export const syncDatabase = async () => {
  await sequelize.sync({ force: true }); // Esto elimina y recrea la base de datos
  console.log("Base de datos sincronizada");
};
