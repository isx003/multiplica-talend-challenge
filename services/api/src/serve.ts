import express from "express";

import UserRoutes from "./routes/UserRoutes";

const app = express();
const port = 8080;

// define a route handler for the default home page
app.use("/", UserRoutes());

// start the Express server
app.listen( port, () => {
    console.log( `enviroment ${ process.env.NODE_ENV }, server started at http://localhost:${ process.env.NODE_PORT }` );
});