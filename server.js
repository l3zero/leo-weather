require('dotenv').config()
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const app = express();
const corsOptions = {
   allowedHeaders: 'Access-Control-Allow-Headers,Origin, X-Requested-With, Content-Type, Accept',
   origin: '*',
}
app.use(helmet())
app.use(helmet.referrerPolicy({policy: 'same-origin'}))
app.use(compression())
app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = (process.env.PORT || '9000')
const server = app.listen(port, () => {
console.log(`App running → PORT ${port}`);
});
