const express = require("express");
const app = express();
const CC = require('./controllers/confessionsController');

app.use(express.json()); 

app.get('/api/confessions', CC.getConfessions);
app/post('api/confessions'. CC.addConfessions);
app/put('api/confessions/:id'. CC.editConfession);
app/delete('api/confessions/:id'. CC.deleteConfession);



app.listen(3031, () => console.log(`Listening on Port 3031`));