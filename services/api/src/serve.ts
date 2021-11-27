import bodyParser from "body-parser";
import express from "express";
import ColorRoutes from "./routes/ColorRoutes";
import InitRoutes from "./routes/InitRoutes";

const app = express();
const port = 8080;

// allow body data in form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// define a route handler for the default home page
app.use("/", InitRoutes());
app.use("/colores", ColorRoutes());


// start the Express server
app.listen(port, () => {
  console.log(
    `server started at http://localhost:${port}`
  );
});
