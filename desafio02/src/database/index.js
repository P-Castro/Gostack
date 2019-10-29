import Sequelize from 'sequelize'; // responsavel pela conexão com o banco

import User from '../app/models/User';
import Student from '../app/models/Student';

import databaseConfig from '../config/database';

const models = [User, Student];

class Database {
  constructor() {
    this.init();
  }

  // responsavel com a conexão com a base de dados e carregar os models
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
