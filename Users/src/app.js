const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const userRouter = require('./routes/userRoutes');
const fileRouter = require('./routes/fileRoute');
const ErrorController = require('./controllers/errorController');

const app = express();

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api/users', userRouter)
app.use('/api/imageupload', fileRouter)

app.all('*', (req, res, next) => {

    const error = new Error(req.originalUrl + "url not found on server")
    next(error)
})

app.use(ErrorController)

module.exports = app;