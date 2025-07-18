const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = db.User;

exports.createUser = async (userData) => {
  const { name, email, password, role } = userData;

  if (!name || !email || !password) {
    throw new Error("Nama, email, dan password harus diisi.");
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    role: role || "user",
  });

  return { id: newUser.id, name: newUser.name, email: newUser.email };
};

exports.findAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

exports.findUserById = async (id) => {
  const user = await User.findByPk(id); 
  return user;
};

exports.updateUser = async (id, updateData) => {
  const [num] = await User.update(updateData, {
    where: { id: id },
  });

  if (num == 1) {

    const updatedUser = await User.findByPk(id);
    return updatedUser;
  } else {
    throw new Error(
      `Tidak dapat memperbarui pengguna dengan id=${id}. Mungkin pengguna tidak ditemukan`
    );
  }
};

exports.deleteUser = async (id) => {
  const num = await User.destroy({
    where: { id: id },
  });
  if (num != 1) {
    throw new Error(
      `Tidak dapat menghapus pengguna dengan id=${id}. Mungkin pengguna tidak ditemukan`
    );
  }

};
