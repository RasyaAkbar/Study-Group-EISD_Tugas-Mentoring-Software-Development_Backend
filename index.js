const express = require('express');
const db = require("./src/models");

const userRoutes = require("./src/routes/user.routes");
const bookRoutes = require("./src/routes/book.routes");
const loanRoutes = require("./src/routes/loan.routes");
const authorRoutes = require("./src/routes/author.routes");
const categoryRoutes = require("./src/routes/category.routes");
const authRoutes = require("./src/routes/auth.routes");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Selamat datang di API aplikasi." });
});

app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/loans", loanRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}.`);
});