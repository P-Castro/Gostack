module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true, // garante a criaçao de uma coluna com a criaçao e ediçao de cada registro
    underscored: true,
    underscoredAll: true
  }
};
