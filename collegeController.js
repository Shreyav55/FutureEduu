// Get all colleges
exports.getAllColleges = (req, res) => {
    let sql = 'SELECT * FROM colleges';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Add a new college
exports.addCollege = (req, res) => {
    let newCollege = req.body;
    let sql = 'INSERT INTO colleges SET ?';
    db.query(sql, newCollege, (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, ...newCollege });
    });
};

// Get college by ID
exports.getCollegeById = (req, res) => {
    let sql = 'SELECT * FROM colleges WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
};


exports.searchColleges = (req, res) => {
    let { name, state, city } = req.query;
    let sql = 'SELECT * FROM colleges WHERE name LIKE ? OR state LIKE ? OR city LIKE ?';
    db.query(sql, [`%${name}%`, `%${state}%`, `%${city}%`], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};
