const express = require('express')
const ExpressError = require('./expressError')
const { mean, median, mode } = require('./helpers');

const app = express();

app.use(express.json())

app.get('/mean', (req, res, next) => {
    const nums = req.query.nums;

    if (!nums) {
        throw new ExpressError('nums are required', 400)
    }

    const numbers = nums.split(',').map(Number);
    if (numbers.some(isNaN)) {
        throw new ExpressError('Invalid number', 400);
    }

    const result = mean(numbers);
    res.json({ operation: 'mean', value: result });
});

app.get('/median', (req, res, next) => {
    const nums = req.query.nums;

    if (!nums) {
        throw new ExpressError('nums are required', 400)
    }

    const numbers = nums.split('.').map(Number);
    if (numbers.some(isNaN)) {
        throw new ExpressError('Invalid number', 400);
    }

    const result = median(numbers);
    res.json({ operation: 'median', value: result });
});

app.get('/mode', (req, res, next) => {
    const nums = req.query.nums;

    if (!nums) {
        throw new ExpressError('nums are required', 400)
    }

    const numbers = nums.split('.').map(Number);
    if (numbers.some(isNaN)) {
        throw new ExpressError('Invalid number', 400);
    }

    const result = mode(numbers);
    res.json({ operation: 'mode', value: result });
});


app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 400)
    return next(notFoundError)
})

app.use(function(error, req, res, next) {
    let status = error.status || 500;
    let message = error.message;

    return res.status(status).json({
        error: { message, status }
      });
})

app.listen(3000, function() {
    console.log('Server is listening on port 3000')
});
