import { query } from "../query/query.js";
import TABLES from "../config/tables.js";

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

  const sql =
    "INSERT INTO products (name, description, price, category, status, images, link, limited_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  query(
    sql,
    [name, description, price, category, status, images, link, limited_id],
    res,
    true
  );
};

const deleteProduct = (req, res) => {
  const { id } = req.params;

  const sql = `DELETE * FROM ${TABLES.PRODUCTS} WHERE id=${id}`;

  query(sql, res, true);
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { title, tags, description, singers, writers } = req.body;

  const sql = `
      UPDATE products 
      SET name = ?, description = ?, price = ?, category = ?, status = ?, images = ?, link = ?, limited_id = ?
      WHERE id = ?
    `;

  const values = [
    req.user.userId,
    title,
    tags,
    description,
    singers,
    writers,
    id,
  ];

  query(sql, values, res, true);
};

export { getProducts, addProduct, deleteProduct, updateProduct };
