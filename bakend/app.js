// import du module express
const express = require("express");
const paginate = require("jw-paginate");
// import du module body parser
const bodyParser = require("body-parser");
// import du module mongoose
const mongoose = require("mongoose");
// Import le module  Axios
const axios = require("axios");
// Import du module Bcrypt
const bcrypt = require("bcrypt");
// Import du module nodemailer
const nodemailer = require("nodemailer");

const request = require("request");

const mongooseValidator = require("mongoose-unique-validator");
// Import du module multer
const multer = require("multer");

// configuration du mongoose: connection avec la BD mongoDB nomé anonymous
mongoose.connect("mongodb://localhost:27017/anonymousDB");
// import user Model
const User = require("./models/user");
// Import match model
const Match = require("./models/match");
// Import player model
const Player = require("./models/player");
// Import team model
const Team = require(`./models/team`);

// creation d'une application express nomé app
const app = express();
// configuration du module body parse pour envoyer les reponse au FE sous format Json
// Import du module path
const path = require("path");
// configuration : /images=> racourci: shortcut
app.use("/images", express.static(path.join("bakend/images")));
app.use("/avatar", express.static(path.join("bakend/user")));

app.use(bodyParser.json());
// configuration du module body parse pour conertir les requette du FE sous format Json
app.use(bodyParser.urlencoded({ extended: true }));
//  configutaion de sécurité
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};
const storageConfig = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "bakend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "." + extension;
    cb(null, imgName);
  },
});
const storageConfigUser = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "bakend/user");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "." + extension;
    cb(null, imgName);
  },
});
// Traitement logique
// app.post("/api/addX", multer({ storage: storage }).single('img'), (req, res) => {
// console.log("file", req.file);
//     url = req.protocol + '://' + req.get('host');
//         img: url + '/images/' + req.file.filename});

// Traitement logic:Get All Matches
app.get("/matches", (req, res) => {
  // instructions
  Match.find((err, docs) => {
    res.json({ match: docs });
  });
});
// Traitement de get match by name
app.post("/matches/search", (req, res) => {
  let x = req.body.msg;
  console.log(x);
  Match.find({ scoreOne: { $gte: 2 } }).then((docs) => {
    console.log("SerachByName", docs);
    res.json({ matchs: docs });
  });
});
// traitement logic de get match by id
app.get("/matches/:id", (req, res) => {
  // instructions
  let x = req.params.id;
  Match.findOne({ _id: x }).then((doc) => {
    console.log("here doc", doc);
    res.json({ obj: doc });
  });
  // let findedMatch=matches.find(obj=>{return obj.id == x})

  // console.log("here into ", );
});
// Traitement logic:delete Match By Id

app.delete("/matches/:id", (req, res) => {
  Match.deleteOne({ _id: req.params.id }).then((response) => {
    if (response.deletedCount) {
      res.json({ msg: "User deleted with success" });
    }
  });
});
// traitement logic de updat match
app.put("/matches/:id", (req, res) => {
  let obj = req.body;
  let x = obj.id;
  Match.updateOne({ _id: req.params.id }, req.body).then((response) => {
    console.log("response after update", response);
    if (response) {
      res.json({ msg: response });
    }
  });
});
// traitement logic de add match
app.post("/matches", (req, res) => {
  console.log("my object", req.body);
  let match = new Match({
    // attibuts du schema du modéle:req.body.attribut FE
    // _id:1,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
  });
  match.save((err, doc) => {
    console.log("error", err);
    console.log("document", doc);
    if (err) {
      console.log("Error, err");
    } else {
      res.json({ msg: " object Added" });
    }
  });

  // let obj=req.body;
  // matches.push(obj);
});

// Traitement logic de get Team By name
app.post("/teams/search", (req, res) => {
  let x = req.body.team;
  console.log(x);
  Team.find({ stadium:x}).then((docs) => {
    console.log("teams", docs);
    res.json({ findedTeam: docs });
  });
});

// traitement logic de get all teams
app.get("/teams", (req, res) => {
  Team.find((err, docs) => {
    res.json({ teams: docs });
  });
});
// Traitement logic:delete Match By Id

app.delete("/teams/:id", (req, res) => {
  Team.deleteOne({ _id: req.params.id }).then((response) => {
    if (response.deletedCount) {
      res.json({ msg: "Team deleted with success" });
    }
  });
});
// traitement logic de getTeamByName
// app.post("/teams", (req, res) => {
//   let teamObj = req.body;

//   let result = teams.filter((obj) => {
//     return obj.name.toLowerCase() == teamObj.team.toLowerCase();
//   });
//   res.json({ findedTeam: result });
// });
// traitement logic de getTeamByNameTwo
// app.get("/teams/:name", (req, res) => {
//   let name = req.params.name;
//   console.log(name);
//   let result = teams.filter((obj) => {
//     return obj.name.toLowerCase() == name.toLowerCase();
//   });
//   res.json({ findedTeam: result });
// });
// Traitement Logique de Player
// Traitement logic : add player
app.post(
  "/players",
  multer({ storage: storageConfig }).single("img"),
  (req, res) => {
    console.log("here into add player", req.body);
    let url = req.protocol + "://" + req.get("host");
    console.log(url);

    // let player = new Player({

    //   name: req.body.name,
    //   number: req.body.number,
    //   age: req.body.age,
    //   position: req.body.position,
    //   img: url + '/images/' + req.file.filename});

    // console.log(req.body.name);
    // player.save((err, doc) => {
    //   if (err) {
    //     console("Error", err);
    //   } else {
    //     console.log(doc);
    //     res.json({ msg: "Object Aded" });
    //   }
    // });
  }
);

// Traitement logic :get All Player
app.get("/players", (req, res) => {
  Player.find((err, docs) => {
    res.json({ players: docs });
  });
});
// Traitement logic : delete Player
app.delete("/players/:id", (req, res) => {
  let x = req.params.id;

  Player.deleteOne({ _id: x }).then((response) => {
    console.log("msg after delete", response);
    if (response.deletedCount) {
      res.json({ msg: "hi" });
    }
  });
});
// Traitement logic: update Player
app.put("/players/:id", (req, res) => {
  let x = req.params.id;
  Player.updateOne({ _id: x }, req.body).then((doc) => {
    console.log("response", doc);
    if (doc.modifiedCount == 1) {
      res.json({ msg: "Updated" });
    }
  });
});
// Traitement logic :Getplayerby Id
app.get("/players/:id", (req, res) => {
  let x = req.params.id;
  Player.findOne({ _id: x }).then((doc) => {
    console.log("response", doc);
    res.json({ player: doc });
  });
});
// Traitement logic de add Team
app.post("/teams", (req, res) => {
  let team = new Team({
    name: req.body.name,
    owner: req.body.owner,
    foundation: req.body.foundation,
    stadium: req.body.stadium,
  });
  team.save((err, docs) => {
    res.json({ msg: "Team Added" });
    console.log("Team Added", team);
  });
});
// dispaly Teams
app.get("/teams", (req, res) => {
  // instructions
  Team.find((err, docs) => {
    console.log(docs);
    res.json({ teams: docs });
    console.log(docs);
  });
});
// Add User Signup
app.post(
  "/users/signup",
  multer({ storage: storageConfigUser }).single("img"),
  (req, res) => {
    let url = req.protocol + "://" + req.get("host");
    bcrypt.hash(req.body.password, 10).then((cryptedPwd) => {
      let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        pwd: cryptedPwd,
        img: url + "/avatar/" + req.file.filename,
      });
      console.log(user.img);
      user.save((err, doc) => {
        if (err) {
          res.json({ msg: "Email Existant" });
        } else {
          res.json({ msg: "User Added" });
          sendMsg(req.body.email);
        }
      });
    });
  }
);
// Login User
app.post("/users/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((doc) => {
      console.log("After Login", doc);
      if (!doc) {
        res.json({ message: "0" });
      }
      // compare req.body.password with doc.password
      return bcrypt.compare(req.body.pwd, doc.pwd);
    })
    .then((pwdResult) => {
      console.log("pwdResult", pwdResult);
      if (!pwdResult) {
        res.json({ message: "1" });
      }
      User.findOne({ email: req.body.email }).then((finalResult) => {
        let userToSend = {
          fName: finalResult.firstName,
          lName: finalResult.lasttName,
        };
        res.json({
          message: "2",
          user: userToSend,
        });
      });
    });
});
// Get all users
app.get("/users", (req, res) => {
  User.find().then((response) => {
    res.json({ users: response });
  });
});
// delete user
app.delete("/users/:id", (req, res) => {
  User.deleteOne({ _id: req.params.id }).then((response) => {
    if (response.deletedCount) {
      res.json({ msg: "User deleted with success" });
    }
  });
});

app.post("/weather", (req, res) => {
  let x = req.body;
  console.log(x);
});
app.post("/weather/search", (req, res) => {
  let country = req.body.search;
  let key = "62ee756a34835483299877a61961cafb";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    country +
    "&appid=" +
    key +
    "&units=metric";
  axios.get(apiUrl).then((response) => {
    console.log("Here response", response);
    let weather = response.data.main;
    console.log("Here weather  main", weather);
    let result = {
      temp: weather.temp,
      pressure: weather.pressure,
      humidity: weather.humidity,
      country: response.data.name,
      image: response.data.weather[0].icon,
      wind: response.data.wind.speed,
    };
    res.status(200).json({
      result: result,
    });
  });
});

// Traitement logiw de get tems(SportApi)
app.get("/soccer/:countries", (req, res) => {
  let countrie=req.params.countries;
  // console.log(countrie)
  let options = {
    // url: `https://app.sportdataapi.com/api/v1/soccer/teams?apikey=a22ba720-e1ba-11ec-a9b2-49e11d47f1f1&continent=${countrie} `,
   url: `https://app.sportdataapi.com/api/v1/soccer/countries?apikey=a22ba720-e1ba-11ec-a9b2-49e11d47f1f1`
  };
 
  request(options, function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log("Here body", JSON.parse(body).data);
      let data = JSON.parse(body).data;
     
      for (var i= 1; i < data.length ; i++) {

        if((data[i].name).toLowerCase() == countrie.toLowerCase()){

          let  apiUrl= `https://app.sportdataapi.com/api/v1/soccer/teams?apikey=a22ba720-e1ba-11ec-a9b2-49e11d47f1f1&country_id=${data[i].country_id} `;
         
          axios.get(apiUrl).then((response) => {
            console.log("Here response", response.data.data);
            console.log(response.data.data.length);
            res.json({ teams: response.data.data});
          });
          // let optionsTwo = {
          //   url: https://app.sportdataapi.com/api/v1/soccer/teams?apikey=a22ba720-e1ba-11ec-a9b2-49e11d47f1f1&country_id=${data[i].country_id} `,
           
          // };
          console.log(countrie)
          // traitement
        //   request(optionsTwo, function callback(error, response, body) {
        //     if (!error && response.statusCode == 200) {
        //       console.log("Here Response", JSON.parse(body).data);
        //       res.json({ teams: data});
        //     }
        // });
        break;
         }
     
      }
}})});

// Export de l'application app
module.exports = app;
