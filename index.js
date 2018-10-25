const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require('body-parser');

const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

const app = express();

//connect to mongodb
mongoose.connect(keys.mongoURI);

app.use(bodyParser.json());
//cookie for user authentication
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());


//pass application paramter to authRoutes
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

//server port heoruko
const PORT = process.env.PORT || 5001;
app.listen(PORT);
