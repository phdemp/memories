import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import postRoute from './routes/posts.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 6001;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoute);
// app.get('/', (req, res) => {
//   res.send('API is running');
// });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on ${PORT}`))
  )
  .catch((error) => console.log(error.message));
