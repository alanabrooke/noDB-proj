const express = require("express");

const app = express();

app.use(express.json()); 

app.listen(3031, () => console.log(`Listening on Port 3031`));