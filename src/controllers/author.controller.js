const authorService = require('../services/author.service');

exports.create = async (req, res) => {
  try {
    const authorData = req.body;
    const newAuthor = await authorService.createAuthor(authorData);
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const authors = await authorService.findAllAuthors();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const authorId = req.params.id;
    const author = await authorService.findAuthorById(authorId);
    if (author) {
      res.status(200).json(author);
    } else {
      res.status(404).json({ message: `Author with id=${authorId} not found.` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const authorId = req.params.id;
    const updateData = req.body;
    const updatedAuthor = await authorService.updateAuthor(authorId, updateData);
    res.status(200).json(updatedAuthor);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const authorId = req.params.id;
    await authorService.deleteAuthor(authorId);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};