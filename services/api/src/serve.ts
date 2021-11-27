import express from "express";

import UserRoutes from "./routes/UserRoutes";

const app = express();

// define a route handler for the default home page
app.use("/", UserRoutes());

// start the Express server
app.listen(  process.env.NODE_PORT, () => {
    console.log( `enviroment ${ process.env.NODE_ENV }, server started at http://localhost:${ process.env.NODE_PORT }` );
});