import TABLES from "../config/tables.js";
import bcrypt from "bcrypt";
import db from "../db.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your_secret_key";

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM ${TABLES.USERS} WHERE email=?`;

  db.execute(sql, [email], async (err, data) => {
    if (err) {
      return res.json({ message: err });
    } else {
      if (data.length === 0) {
        return res.status(400).json({
          ResponseData: null,
          ResponseCode: 400,
          ErrorMessage: "Invalid_email",
        });
      }

      const user = data[0];

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          ResponseData: null,
          ResponseCode: 400,
          ErrorMessage: "Invalid_parameters",
        });
      }

      const token = jwt.sign(
        { userId: user.id, username: user.username },
        JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      return res.json({
        ResponseData: { ...user, token },
        ResponseCode: 200,
        ErrorMessage: null,
      });
    }
  });
};

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({
      ResponseData: null,
      ResponseCode: 401,
      ErrorMessage: "Access denied. No token provided.",
    });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        ResponseData: null,
        ResponseCode: 403,
        ErrorMessage: "Invalid token",
      });
    }

    req.user = jwt.verify(token, JWT_SECRET);
    next();
  });
};

export { loginUser, authenticateToken };
