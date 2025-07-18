const categoryService = require('../services/category.service');

exports.create = async (req, res) => {
  try {
    const categoryData = req.body;
    const newCategory = await categoryService.createCategory(categoryData);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const categories = await categoryService.findAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await categoryService.findCategoryById(categoryId);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: `Category with id=${categoryId} not found.` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const updateData = req.body;
    const updatedCategory = await categoryService.updateCategory(categoryId, updateData);
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const categoryId = req.params.id;
    await categoryService.deleteCategory(categoryId);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}; 