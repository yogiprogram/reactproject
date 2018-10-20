const express = require("express");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
require("./services/passport");

const app = express();

//connect to mongodb
mongoose.connect(keys.mongoURI);

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

//server port heoruko
const PORT = process.env.PORT || 5001;
app.listen(PORT);
