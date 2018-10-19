const express = require("express");
const passportConfig = require("./services/passport");

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5001;

app.listen(PORT);
