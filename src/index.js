// importing libraries

import 'dotenv/config';
import Express from 'express';
import Mongoose from 'mongoose';
import Cors from 'cors';
import logger from 'morgan';
import Helmet from 'helmet';
import RateLimit from 'express-rate-limit';
import routes from './routes';

const app = Express();
const { PORT } = process.env;

const limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(Express.static('../client/build'));
  // path.join(__dirname,
}

// prebuild middlewares
app.use(Cors()); // Enable All CORS Requests
app.use(Helmet()); // Securing Express apps by setting various HTTP headers
app.use(logger('dev')); // HTTP request logger
app.use(Express.json()); // It parses incoming requests with JSON payloads and is based on body-parser
app.use(limiter); // Basic rate-limiting middleware

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/it-inventory';

Mongoose.connect(MONGODB_URI, { useNewUrlParser: true, autoIndex: false })
  .then(() => console.log('MongoDB connected successfuly'))
  .catch((err) => console.log(err));

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`)
);
