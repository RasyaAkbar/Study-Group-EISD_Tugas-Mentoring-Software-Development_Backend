const { Book, Author } = require('../models');

exports.createBook = async (bookData) => {
  return await Book.create(bookData);
};

exports.findAllBooks = async () => {
  return await Book.findAll({ include: Author });
};

exports.findBookById = async (id) => {
  return await Book.findByPk(id, { include: Author });
};

exports.updateBook = async (id, updateData) => {
  const book = await Book.findByPk(id);
  if (!book) throw new Error('Book not found');
  await book.update(updateData);
  return book;
};

exports.deleteBook = async (id) => {
  const book = await Book.findByPk(id);
  if (!book) throw new Error('Book not found');
  await book.destroy();
};