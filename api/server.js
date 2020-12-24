const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Task = require('./api/models/taskModel');
const routes = require('./api/routes/taskRoutes');
const config = {
    database: "mongodb://brainserver.local:32770",
    auth: {
        user: 'luca.pagot',
        password: '1q"W£E$R%',
        authdb: "admin"
    }
};

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(config.database, {
    auth: config.auth,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`});
});

console.log(`Server started on port ${port}`);