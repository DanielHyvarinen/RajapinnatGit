const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from arviointi where idArviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (idArviointi,Paivays,Arvosana,idOpiskelija,idOpintojakso) values(?,?,?,?,?)',
      [arviointi.idArviointi,arviointi.Paivays,arviointi.Arvosana,arviointi.idOpiskelija,arviointi.idOpintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set idArviointi=?,Paivays=?, Arvosana=?, idOpiskelija=?, idOpintojakso=? where idArviointi=?',
      [arviointi.idArviointi,arviointi.Paivays,arviointi.Arvosana,arviointi.idOpiskelija,arviointi.idOpintojakso, id],
      callback
    );
  }
};
module.exports = arviointi;