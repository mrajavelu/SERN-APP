// server/controllers/studentController.js
const db = require('../db'); // Import the shared pool

exports.view = (req, res) => {
  // Query MySQL directly
  const sqlQuery = 'SELECT * FROM student';
  db.query(sqlQuery, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database query failed');
    }
    // Pass data to Handlebars
    res.render('home', { rows });
  });
};

exports.addUser = (req, res) => {
  res.render('addUser');
}
exports.add = (req, res) => {
  const { name, age, city } = req.body;
  const sql = "INSERT INTO student (name, age, city) values(?,?,?)";
  db.query(sql, [name, age, city], (error, result) => {
    if (error) {
      console.log("Insert Error: ", error);
      return res.status(500).send('Failed to insert student');
    }
    res.redirect('/')
  })
}

exports.editUser = (req, res) => {
  const { id } = req.params;
  const sql = "select * from student where id = ?";
  db.query(sql, [id], (err, rows) => {
    if (err) {
      console.log("Insert Error: ", err);
      return res.status(500).send('Failed to Update student');
    }
    res.render("updateUser", { student: rows[0] })
  });
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { name, age, city } = req.body;
  const sql = "Update student SET name = ?, age = ?, city = ? WHERE id = ?";
  db.query(sql, [name, age, city, id], (error, result) => {
    if (error) {
      console.log("Insert Error: ", error);
      return res.status(500).send('Failed to insert student');
    }
    res.redirect('/')
  })
}

exports.delete = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE from student where id = ?";
  db.query(sql, [id], (err, rows) => {
    if (err) {
      console.log("Insert Error: ", err);
      return res.status(500).send('Failed to Update student');
    }
    res.redirect("/");
  });
};