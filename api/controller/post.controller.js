import pool from "../db/config.js";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=$1"
    : "SELECT * FROM posts";
  const values = req.query.cat ? [req.query.cat] : [];

  pool.query(q, values, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data.rows);
  });
};

export const getOnePost = (req, res) => {
  const q =
    "select username  title , desc ,p.img , u.img as userImg , cat , date from users u join posts p on u.id=p.uid where p.id=$1 ";
  pool.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data.rows[0]);
  });
};
export const addPost = (req, res) => {
  res.json("from controller");
};
export const deletePost = (req, res) => {
  res.json("from controller");
};
export const updatePost = (req, res) => {
  res.json("from controller");
};
