import { query } from "../query/query.js";
import TABLES from "../config/tables.js";

const payViaPaypal = () => {};

const payViaStripe = () => {};

const getSales = (req, res) => {
  const sql = `SELECT * FROM ${TABLES.PAYMENTS}`;

  query(sql, null, res, false);
};

export { payViaPaypal, payViaStripe, getSales };
