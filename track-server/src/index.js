require('./models/User');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authRouter = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use(authRouter);

const mongoURI = 'mongodb+srv://trackClusterAdmin:trackClusterAdmin@trackcluster-8oy8n.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('connected to mongo instance');

});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
})

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(3000, () => {
    console.log('Listenin on port 3000');
});