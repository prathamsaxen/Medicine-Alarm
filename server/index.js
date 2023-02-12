const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cron = require("node-cron");
const twilio = require("twilio");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb+srv://SumirVats:sumir123@medicinealarm.zwsvxz4.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to DB");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  address: String,
});

const User = new mongoose.model("User", userSchema);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Success", user: user });
      } else {
        res.send({ message: "Wrong Credentials" });
      }
    } else {
      res.send("Not Register");
    }
  });
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already exist" });
    } else {
      const user = new User({ name, email, password });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Sucessfull" });
        }
      });
    }
  });
});

app.post("/schedule-message", (req, res) => {
  const { phone, message, time } = req.body;

  cron.schedule(time, () => {
    const accountSid = "AC24554744906ddd8c79518599b3c11aef";
    const authToken = "b565df6e2e10087d6befa65c5ee637bc";
    const client = twilio(accountSid, authToken);
    client.messages
      .create({
        body: message,
        from: "+15732964819",
        to: phone,
      })
      .then((message) => console.log(message.sid))
      .catch((error) => console.log(error));
  });

  res.send("Message scheduled");
});

// Serve static files for the frontend
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(6969, () => {
  console.log("Server started");
});
