const express = require("express");
const app = express();
const routes = require("./routes/routes");

app.use("/", routes);

app.listen(3535, () => console.log("corriendo en el puerto 3535"));
