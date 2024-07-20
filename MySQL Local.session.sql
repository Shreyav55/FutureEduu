CREATE DATABASE CollegeCourses;
USE CollegeCourses;
CREATE TABLE Colleges (
    CollegeID INT AUTO_INCREMENT PRIMARY KEY,
    CollegeName VARCHAR(255) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    City VARCHAR(255) NOT NULL,
    State VARCHAR(255) NOT NULL,
    ContactEmail VARCHAR(255),
    ContactPhone VARCHAR(20)
);

CREATE TABLE Courses (
    CourseID INT AUTO_INCREMENT PRIMARY KEY,
    CourseName VARCHAR(50) NOT NULL,
    Duration VARCHAR(50) NOT NULL
);

CREATE TABLE CollegeCourses (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    CollegeID INT,
    CourseID INT,
    FOREIGN KEY (CollegeID) REFERENCES Colleges(CollegeID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);
-- Inserting data into Colleges table
INSERT INTO Colleges (CollegeName, Address, City, State, ContactEmail, ContactPhone) VALUES
('Indian Institute of Technology Delhi', 'Hauz Khas', 'New Delhi', 'Delhi', 'contact@iitd.ac.in', '+91-11-26597135'),
('Indian Institute of Technology Bombay', 'Powai', 'Mumbai', 'Maharashtra', 'contact@iitb.ac.in', '+91-22-25722545'),
('Birla Institute of Technology and Science', 'Pilani Campus', 'Pilani', 'Rajasthan', 'contact@bits-pilani.ac.in', '+91-1596-245073'),
('University of Delhi', 'Benito Juarez Marg', 'New Delhi', 'Delhi', 'contact@du.ac.in', '+91-11-27667011'),
('Xavier Labour Relations Institute', 'C.H. Area (East)', 'Jamshedpur', 'Jharkhand', 'contact@xlri.ac.in', '+91-657-6653333');

-- Inserting data into Courses table
INSERT INTO Courses (CourseName, Duration) VALUES
('B.Tech', '4 years'),
('M.Tech', '2 years'),
('BCA', '3 years'),
('MCA', '3 years'),
('BBA', '3 years'),
('MBA', '2 years');

-- Associating Colleges with Courses in CollegeCourses table
INSERT INTO CollegeCourses (CollegeID, CourseID) VALUES
(1, 1), -- IIT Delhi offers B.Tech
(1, 2), -- IIT Delhi offers M.Tech
(2, 1), -- IIT Bombay offers B.Tech
(2, 2), -- IIT Bombay offers M.Tech
(3, 1), -- BITS Pilani offers B.Tech
(3, 2), -- BITS Pilani offers M.Tech
(4, 3), -- University of Delhi offers BCA
(4, 4), -- University of Delhi offers MCA
(4, 5), -- University of Delhi offers BBA
(5, 6); -- XLRI offers MBA
-- Retrieve all colleges and their courses
SELECT 
    c.CollegeName,
    cr.CourseName,
    cr.Duration
FROM 
    CollegeCourses cc
JOIN 
    Colleges c ON cc.CollegeID = c.CollegeID
JOIN 
    Courses cr ON cc.CourseID = cr.CourseID;
