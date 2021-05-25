import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import foodsRoutes from './routes/foods.js'

const app = express();

app.use('/foods', foodsRoutes)

app.use(cors());
app.use(express.json());

const CONNECTION_URL = 'mongodb+srv://daniel_wang:logSonic335@cluster0.tisbf.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);