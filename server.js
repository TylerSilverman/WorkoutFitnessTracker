const express = require("express");
const mongoose = require("mongoose"); //connecting to mongoose sever database
const routes = require("./routes");

const PORT = process.env.PORT || 1459;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connecting to mongoose sever database 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// consol chalk to write in the terminal  
const chalk = require('chalk'); 
console.log(chalk.green('Ready to Track your fitness?'));
console.log(chalk.green('Click below tp begin..'));

//pulling from the routes folder
app.use(routes);


// Set the app to listen on port 3000
app.listen(PORT, () => {
  console.log("Now listening http://localhost:" + PORT);
});