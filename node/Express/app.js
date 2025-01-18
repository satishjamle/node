const express = require("express"); // import express'
const path = require("path");
const fs = require("fs");
const app = express(); // create app
const port = 8080; // port run on 8000

//EXPRESS SPECIFIC STUFF

app.use("/static", express.static("static"));
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set("view engine", "pug");

// set the views directory
app.set("views", path.join(__dirname, "views"));

// ENDPOINTS
app.get("/", (req, res) => {
  const con = "this is the best cntent on the internet so far so use it wisely";
  const params = { title: "pubg is the best game", content: con };
  res.status(200).render("index.pug", params);
});
app.post("/", (req, res) => {
  name = req.body.name;
  age = req.body.age;
  gender = req.body.gender;
  address = req.body.address;
  more = req.body.more;

  let outputtowrite = `the name of the client is ${name} , ${age} years old , ${gender} , residing at ${address} . more about him/ her : ${more}`;
  fs.writeFileSync("output.txt", outputtowrite);
  const params = { message: "your form has been submitted successfully" };

  res.status(200).render("index.pug", params);
});

// START THE SERVER
app.listen(port, () => {
  console.log(`Server is running on successfully on port :${port}`);
});
