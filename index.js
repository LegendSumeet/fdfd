const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const MentorRoutes = require("./routes/mentor");
const BookmarkRoutes = require("./routes/bookmark");
dotenv.config();
// get variables from .env file || process.env.VARIABLE_NAME
mongoose.connect(process.env.MONGO_URL).then(() => console.log('DB Connected!')).catch((err) => console.log(err))
app.use(express.json());
app.use("/api/", authRoute);
app.use("/api/users", userRoute);
app.use("/api/mentor", MentorRoutes);
app.use("/api/bookmark", BookmarkRoutes);
app.listen(process.env.PORT || 5002, () => console.log(`app listening on port ${process.env.PORT}!`))