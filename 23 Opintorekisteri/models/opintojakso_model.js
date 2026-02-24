const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from opintojakso where idOpintojakso=?', [id], callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (idOpintojakso,Koodi,Laajuus,Nimi) values(?,?,?,?)',
      [opintojakso.idOpintojakso,opintojakso.Koodi,opintojakso.Laajuus,opintojakso.Nimi],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where idOpintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set idOpintojakso=?, Koodi=?, Laajuus=?, Nimi=? where idOpintojakso=?',
      [opintojakso.idOpintojakso,opintojakso.Koodi,opintojakso.Laajuus,opintojakso.Nimi, id],
      callback
    );
  }
};
module.exports = opintojakso;