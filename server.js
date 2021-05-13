// Call the link
const express = require("express");

// init express
const app = express();

// Pick a port
const PORT = process.env.PORT || 3000;

// Sets up the Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTES
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listen Check
app.listen(PORT, function () {
  console.log(`App listening on PORT: ${PORT}`);
});
