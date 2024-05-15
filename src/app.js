import express from "express";
import allRoutes from "./router/index.js";

const app = express();
const PORT = 3000;
app.use(express.json());

app.use(allRoutes);


app.listen(PORT, ()=>{
    try {
        console.log("Server has been started at Port: ", PORT);
    } catch (error) {
        console.log("Error has been occured: ", error)
    }
});