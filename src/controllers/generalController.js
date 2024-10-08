import { query } from "../query/query.js";
import TABLES from "../config/tables.js";

const getMetaDatas = (req, res) => {
  const sql = `SELECT * FROM ${TABLES.GENERAL}`;

  query(sql, null, res, false);
};

const updateMeta = (req, res) => {
  const { title, description, keywords, id } = req.body;

  const sql = `
      UPDATE meta 
      SET title = ?, description = ?, keywords = ?
      WHERE id = ${id}
    `;

  query(sql, [title, description, keywords], res, true);
};

export { getMetaDatas, updateMeta };
