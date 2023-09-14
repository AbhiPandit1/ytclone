import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import videoRoutes from './routes/videos.js';
import commentRoutes from './routes/comment.js';
import authRoutes from './routes/auth.js';
const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to DB');
  } catch (err) {
    console.error('Error connecting to DB:', err);
    // You might want to handle the error gracefully, e.g., by shutting down the server.
    process.exit(1); // Exit with an error code
  }
};





app.listen(9001, () => {
  console.log('Connected Successfully');
})

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/video', videoRoutes);



//ZBPriGVsGb1VW5Bl
