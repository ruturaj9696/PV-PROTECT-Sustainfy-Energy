import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors package
import listingRouter from './routes/listing.route.js';
import UserRouter from './routes/user.route.js'
import adminRouter from './routes/admin.route.js'
import authRouter from './routes/auth.route.js';
dotenv.config();
const app = express();

// Body parsing middleware
app.use(express.json()); // Parse JSON bodies

// CORS middleware
app.use(cors());

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.json({ msg: "Hello World!" });
});

// Mount the userListingRouter
app.use('/api/listing', listingRouter);
app.use('/api/user',UserRouter );
app.use('/api/admin', adminRouter);
app.use('/api/auth', authRouter);

// Adding middlewate to protect from the errors
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });