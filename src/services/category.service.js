const { Category } = require('../models');

exports.createCategory = async (categoryData) => {
  return await Category.create(categoryData);
};

exports.findAllCategories = async () => {
  return await Category.findAll();
};

exports.findCategoryById = async (id) => {
  return await Category.findByPk(id);
};

exports.updateCategory = async (id, updateData) => {
  const category = await Category.findByPk(id);
  if (!category) throw new Error('Category not found');
  await category.update(updateData);
  return category;
};

exports.deleteCategory = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) throw new Error('Category not found');
  await category.destroy();
}; 