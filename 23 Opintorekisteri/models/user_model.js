const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const user={
  getAll: function(callback) {
    return db.query('select * from user', callback);
  },
  getOne: function(uname, callback) {
    return db.query('select * from user where kayttajanimi=?', [uname], callback);
  },
  add: function(user, callback) {
    bcrypt.hash(user.salasana, saltRounds, function(err, hash) {
      if (err) { 
        return callback(err.message);
      }
      return db.query('insert into user (kayttajanimi, salasana) values(?,?)',
      [user.kayttajanimi, hash], callback);
    });
  },
  delete: function(uname, callback) {
    return db.query('delete from user where kayttajanimi=?', [uname], callback);
  },
  update: function(uname, user, callback) {
    bcrypt.hash(user.salasana, saltRounds, function(err, hash) {
      if (err) { 
        return callback(err.message);
      }
      return db.query('update user set kayttajanimi=?, salasana=? where kayttajanimi=?',
      [user.kayttajanimi, hash, uname], callback);
    });
  }

}

module.exports = user;