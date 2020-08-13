var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var api = require("./api");
var path = require('path');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));  

app.use("/", api);

app.use(express.static("./build"));
app.listen(process.env.PORT || 3001, () => {
    console.log("listening to port 3001");
});

app.engine('js', require('ejs').renderFile);
app.get('/', function(req, res) {
    res.render(path.join(__dirname, './blog/src/App.js'), function(err) {
        if (err) {
          res.status(500).send(err)
        }
      })   
})
