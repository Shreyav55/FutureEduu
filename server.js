const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'host',
    password: 'shreya@23sql',
    database: 'college'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Get all colleges and their courses
app.get('/colleges', (req, res) => {
    const query = `
        SELECT 
            c.CollegeName,
            c.Address,
            c.City,
            c.State,
            c.ContactEmail,
            c.ContactPhone,
            cr.CourseName,
            cr.Duration
        FROM 
            CollegeCourses cc
        JOIN 
            Colleges c ON cc.CollegeID = c.CollegeID
        JOIN 
            Courses cr ON cc.CourseID = cr.CourseID;
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching data');
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
