import pool from "../db/config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const register = (req, res, next) => {
  const q = `SELECT * FROM users WHERE email = $1 OR username = $2`;

  pool.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.rows.length)
      return res.status(409).json("Foydalanuvchi allaqachon mavjud");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const insertQuery =
      "INSERT INTO users(username, email, password) VALUES ($1, $2, $3)";
    const values = [req.body.username, req.body.email, hash];

    pool.query(insertQuery, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res
        .status(201)
        .json("Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi");
    });
  });
};

export const login = async (req, res) => {
  const q = "SELECT * FROM users WHERE username = $1";

  pool.query(q, [req.body.username], async (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.rows.length === 0) {
      return res.status(404).json("Foydalanuvchi topilmadi");
    }

    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      data.rows[0].password
    );

    if (!isPasswordValid) {
      return res.status(400).json("Noto'g'ri foydalanuvchi nomi yoki parol");
    }

    const token = jwt.sign(
      { id: data.rows[0].id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    const { password, ...other } = data.rows[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res, next) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("Foydalanuvchi tizimdan chiqdi");
};
