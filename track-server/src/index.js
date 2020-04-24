require('./models/User');
require('./models/Track');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const requireAuth = require('./middlewares/requireAuth');
const authRouter = require('./routes/authRoutes');
const trackRouter = require('./routes/trackRoutes');

const app = express();

app.use(bodyParser.json());
app.use(authRouter);
app.use(trackRouter);


const mongoURI =
  'mongodb+srv://trackClusterAdmin:trackClusterAdmin@trackcluster-8oy8n.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log('connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listenin on port 3000');
});
