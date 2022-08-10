const express = require("express");
var log4js = require("log4js");
const fs = require('fs');
const cors = require('cors');



log4js.configure({
    appenders: { clicks: { type: "file", filename: "clickLog.log" } },
    categories: { default: { appenders: ["clicks"], level: "info" } }
  });

 
const logger = log4js.getLogger("clicks");
logger.level = "debug";
// logger.debug("Some debug messages");
// logger.info("We have One");
const PORT = process.env.PORT || 3002;

const app = express();
app.use(cors()); //decreasing security 
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.get("/click", (req, res) => {
    logger.info("Clicked");
  });

  app.post("/clicktwo", (req, res) => {
      const user = "userOne";
      var ws = fs.createWriteStream('files/'+user+'.txt',{ flags: 'a' });
                ws.write('On, '+ Date().toLocaleString()+req.body.country +' clicked by: ' + user+ '\n');
                console.log('writestream created/appended for ' + user );
                console.log(req.body);
                console.log(req.body.country);
                res.send(user);
                // res.send(country);
            });

//PUBLIC
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

//   //LOCAL
//   app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
//   });