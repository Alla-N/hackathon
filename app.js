const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const bodyParser = require('body-parser');
const cors = require('cors');

const {port: serverPort} = config.get('webServer');
const mongoURI = config.get('mongoURI');
const registrationRouter = require('./server/api/auth/registration');
const loginRouter = require('./server/api/auth/login');
const userRouter = require('./server/api/routes/user');


const start = async () => {
  try {
    await mongoose.connect(mongoURI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
    );
    console.log('Data base connected')
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
};

start();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json({extended: true}));

app.use('/api', registrationRouter);
app.use('/api', loginRouter);
app.use('/api', userRouter);

app.listen(serverPort, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`server is listening on ${serverPort}`);
});
