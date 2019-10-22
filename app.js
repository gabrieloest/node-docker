// app.js

const mysql = require('mysql');

const con = mysql.createConnection({

	host: "mysql-db",
	user: "root",
	password: "complexpassword",
	database: "Customer"
});

con.connect(function (err) {

	if (err) throw err;
	console.log("Connected");
});

const express = require('express')

const app = express()

const port = process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/docker", (req, res) => {
	res.send("Hello from Docker");
});

app.get('/nodemon', (req, res) => res.send('hello from nodemon'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
