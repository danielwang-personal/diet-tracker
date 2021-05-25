import express from 'express';
import cors from 'cors';

// Info for our server
const app = express();
const port = 3080

// Middleware
app.use(cors());
app.use(express.json()); // lets us parse JSON
app.use(
    express.urlencoded({
      extended: true
    })
)

app.listen(port, () => {
    console.log(`Backend server running on port: ${port}`);
});
  