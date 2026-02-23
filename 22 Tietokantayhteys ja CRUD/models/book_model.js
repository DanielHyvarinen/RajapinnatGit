const db = require('../database');

const book = {
  getAll: function(callback) {
    return db.query('select * from book', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from book where idbook=?', [id], callback);
  },
  add: function(book, callback) {
    return db.query(
      'insert into book (name,author,isbn) values(?,?,?)',
      [book.name, book.author, book.isbn],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from book where idbook=?', [id], callback);
  },
  update: function(id, book, callback) {
    return db.query(
      'update book set name=?,author=?, isbn=? where idbook=?',
      [book.name, book.author, book.isbn, id],
      callback
    );
  }
};
module.exports = book;