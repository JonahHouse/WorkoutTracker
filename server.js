const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
const router = require('./routes')


const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));
app.use(router)


mongoose.connect('mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


.then(() => console.log('connected to MongoDB...'))
.catch(err => console.error('Could not connect to Mongo DB', err))


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });