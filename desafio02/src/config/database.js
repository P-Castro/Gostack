module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gympoint',
  define: {
    timestamps: true, // cria colunas que armazena a data de criação e alteraçao dos registros
    underscored: true, // garante a padronazação de nomenclatura no padrao underscored
    underscoredAll: true,
  },
};
