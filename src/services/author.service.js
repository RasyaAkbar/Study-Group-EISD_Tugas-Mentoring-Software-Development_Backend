const { Author } = require('../models');

exports.createAuthor = async (authorData) => {
  return await Author.create(authorData);
};

exports.findAllAuthors = async () => {
  return await Author.findAll();
};

exports.findAuthorById = async (id) => {
  return await Author.findByPk(id);
};

exports.updateAuthor = async (id, updateData) => {
  const author = await Author.findByPk(id);
  if (!author) throw new Error('Author not found');
  await author.update(updateData);
  return author;
};

exports.deleteAuthor = async (id) => {
  const author = await Author.findByPk(id);
  if (!author) throw new Error('Author not found');
  await author.destroy();
};