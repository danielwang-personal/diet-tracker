import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import mongodb from 'mongodb';

// configure environment variables
dotenv.config()
const MongoClient =  mongodb.MongoClient
const port = process.env.PORT || 8000

// Routes
import entriesRoutes from './routes/entries.js';

// Info for our server
const app = express();


// Middleware
app.use(cors());
app.use(express.json()); // lets us parse JSON
app.use(
    express.urlencoded({
      extended: true
    })
)

// main routes
app.use('/entries', entriesRoutes);

app.listen(port, () => {
    console.log(`Backend server running on port: ${port}`);
});
  