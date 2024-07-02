import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import createError from 'http-errors';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import mongoose from 'mongoose';
import catalogRouter from './routes/catalog.js'; //Import routes for "catalog" area of site


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://georgeDB:123456789Rr@librarydb.msyedcq.mongodb.net/local_library?retryWrites=true&w=majority&appName=libraryDB";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("connected")
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send('error'); // Sending a simple error message for now
});

export default app;
