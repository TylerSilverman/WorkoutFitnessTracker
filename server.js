const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "fitnessTracker";
const collections = ["fitness"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send(index.html);
});

// POST: /submit
// ===========================================

app.post("/submit", (req, res) => {
    db.fitnessTracker.insert(req.body, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  })


// app.get("/exercise", (req, res) => {
//     db.fitnessTracker.find({}, (err, data) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.json(data);
//         }
//       });
//     });

// 2. Retrieve all fitnessTracker info from the database's collection
// GET: /all
// ====================================================
app.get("/all", (req, res) => {
    db.fitnessTracker.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });

 3.  // GET: /find/:id
// ==================================================================
app.get("/find/:id", (req, res) => {
    db.fitnessTracker.find({_id: mongojs.ObjectId(req.params.id) }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });

//   app.get("/exercise?", (req, res) => {
//     db.fitnessTracker.find({_id: mongojs.ObjectId(req.params.id) }, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.json(data);
//       }
//     });
//   });

//   app.get("/exercise", (req, res) => {
//     db.fitnessTracker.find({_id: mongojs.ObjectId(req.body)}, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.json(data);
//       }
//     });
//   });

  // 4. 
// POST: /update/:id
// ================================================================
app.post("/update/:id", (req, res) => {

    db.fitnessTracker.update({_id: mongojs.ObjectId(req.params.id) }, {$set: {note: req.body}}, (err, data) =>{
      if (err) {
        console.log(err);
        res.send(error).status(400)
      } else {
        res.json(data);
      }
    });
  });

  // 5. Delete one note from the database's collection by it's ObjectId
// (remember, mongojs.ObjectId(IdYouWantToFind)
// DELETE: /delete/:id
// ==================================================================
app.delete("/delete/:id", (req, res) => {

    db.fitnessTracker.remove({_id: mongojs.ObjectId(req.params.id) },(err, data) =>{
      if (err) {
        console.log(err);
        res.send(error).status(400)
      } else {
        res.json(data);
      }
    });
  });
  
  // 6. Clear the entire note collection
  // DELETE: /clearall
  // ===================================
  app.delete("/clearall", (req, res) => {
  
    db.fitnessTracker.remove({},(err, data) =>{
      if (err) {
        console.log(err);
        res.send(error).status(400)
      } else {
        res.send(data);
      }
    });
  });

// Set the app to listen on port 3000
app.listen(3000, () => {
  console.log("Now listening http://localhost:" + 3000);
});