import { query } from "../query/query.js";
import TABLES from "../config/tables.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const getProducts = (req, res) => {
  const sql = `SELECT * FROM ${TABLES.PRODUCTS}`;

  query(sql, null, res, false);
};

const addProduct = (req, res) => {
  const {
    name,
    description,
    price,
    category,
    status,
    images,
    link,
    limited_id,
  } = req.body;

  //need to add image uploading fn...

  const sql =
    "INSERT INTO products (name, description, price, category, status, images, link, limited_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  query(
    sql,
    [name, description, price, category, status, "", link, limited_id],
    res,
    true
  );
};

const deleteProduct = (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM products WHERE id=?`;

  query(sql, [id], res, true);
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    price,
    category,
    status,
    images,
    link,
    limited_id,
  } = req.body;

  const sql = `
      UPDATE products 
      SET name = ?, description = ?, price = ?, category = ?, status = ?, images = ?, link = ?, limited_id = ?
      WHERE id = ${id}
    `;

  query(
    sql,
    [name, description, price, category, status, "", link, limited_id],
    res,
    true
  );
};

export { getProducts, addProduct, deleteProduct, updateProduct };
