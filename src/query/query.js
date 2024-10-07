import db from "../db.js";

export const query = (sql, values = [], res, selectFirst, callback) => {
  const _sql = values?.length ? [sql, values] : [sql];

  db.execute(..._sql, (err, data) => {
    if (err) {
      return res.json({
        ResponseData: null,
        ResponseCode: 401,
        ErrorMessage: err,
      });
    } else {
      const _data = selectFirst ? (data[0] ? data[0] : null) : data;

      if (callback) {
        return res.json({
          ResponseData: callback(_data),
          ResponseCode: 200,
          ErrorMessage: null,
        });
      }

      return res.json({
        ResponseData: _data,
        ResponseCode: 200,
        ErrorMessage: null,
      });
    }
  });
};
