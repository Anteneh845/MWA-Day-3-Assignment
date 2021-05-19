const express = require("express");
const app = express();
const routes = require("./routes/games.router");
const PORT = 3000;

// Connect to MongoDB
require("./config/database-config").connectToDB();

app.use("/api", routes);

app.listen(PORT, () => console.log(`App started @ ${PORT}`))