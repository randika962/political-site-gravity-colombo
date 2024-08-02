// --------------------------------------------------Database Connecting Code---------------------------------------------------

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "political",
});

db.connect((err) => {
    if (err) {
      console.error("Error connecting to database: " + err.stack);
      return;
    }
    console.log("Connected to database as id " + db.threadId);
  });

// ---------------------------------------Add a new endpoint to Input section--------------------------------------------

// Function to validate email format

const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };
  
  app.post("/input", (req, res) => {
    console.log(req.body);
  
    // Check if any of the values are empty
    const hasEmptyValues = Object.values(req.body).some(
      (val) => val.trim() === ""
    );
    if (hasEmptyValues) {
      console.log("Empty values detected. Data not saved.");
      return res.json("Error: Empty values detected");
    }
  
    // Validate email format
    if (!validateEmail(req.body.email)) {
      console.log("Invalid email format. Data not saved.");
      return res.json("Error: Invalid email format");
    }
  
    const sql =
      "INSERT INTO inputdata (email, contact) VALUES ?";
    const values = [
      [
        req.body.email,
        req.body.contact,
      ],
    ];
    db.query(sql, [values], (err, data) => {
      if (err) {
        console.error("Error in parsing data: " + err.message);
        return res.json("Error");
      }
      console.log("Data Parse successful");
      return res.json(data);
    });
  });

  app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });