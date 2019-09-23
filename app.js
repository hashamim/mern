const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys.js').mongoURI
const app = express();
const tutorial = require('./routes/api/tutorial');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello World"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use("/api/tutorial", tutorial)
mongoose.connect(db, {useNewUrlParser: true} )
    .then(() =>console.log("Successfully connected to MongoDB"))
    .catch(err=> console.log(err))

