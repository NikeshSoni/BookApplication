const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./Routes/userRouter');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/BookStore", { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Connected to main'))
   .catch(err => console.error(err));

app.use('/user', userRoutes);

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});

// mongoose.connect("mongodb://localhost:27017/TrackTransaction",
//     { useNewUrlParser: true,
//       useUnifiedTopology: true })

//    .then(() => console.log('Connected to main'))
//    .catch(err => console.error(err));

// const Book = db2.model('Book', new mongoose.Schema({ title: String }));

// app.post('/api/transactions/issue', async (req, res) => {
//    const { bookName, userId, issueDate } = req.body;

//    // Validate if book exists
//    const book = await Books.findOne({ bookName });
//    if (!book) return res.status(404).send('Book not found');

//    // Validate if user exists
//    const user = await Users.findById(userId);
//    if (!user) return res.status(404).send('User not found');

//    // Create new transaction
//    const transaction = new Transactions({
//       bookId: book._id,
//       userId,
//       issueDate,
//       rentPerDay: book.rentPerDay,
//       status: "issued"
//    });

//    await transaction.save();
//    res.status(201).send('Book issued successfully');
// });


// app.post('/api/transactions/return', async (req, res) => {
//    const { bookName, userId, returnDate } = req.body;

//    // Find the book by name
//    const book = await Books.findOne({ bookName });
//    if (!book) return res.status(404).send('Book not found');

//    // Find the issued transaction for the book and user
//    const transaction = await Transactions.findOne({
//       bookId: book._id,
//       userId,
//       status: "issued"
//    });
//    if (!transaction) return res.status(404).send('No issued transaction found for this book and user');

//    // Calculate total rent
//    const issueDate = new Date(transaction.issueDate);
//    const returnDateObj = new Date(returnDate);
//    const daysRented = Math.ceil((returnDateObj - issueDate) / (1000 * 60 * 60 * 24));
//    const totalRent = daysRented * transaction.rentPerDay;

//    // Update transaction
//    transaction.returnDate = returnDateObj;
//    transaction.totalRent = totalRent;
//    transaction.status = "returned";

//    await transaction.save();
//    res.status(200).send(`Book returned successfully. Total rent: $${totalRent}`);
// });
