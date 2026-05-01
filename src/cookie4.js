expr = require('express')
app = expr()
cp = require('cookie-parser')
app.use(cp())
app.use(expr.static('../public', { index: "5.html" }))
app.use(expr.urlencoded({ extended: true }))
app.post('/submit-feedback', (req, res) => {
    const { name, email, msg, rating } = req.body
    const fb = { name, email, msg, rating }
    res.cookie('feedback', fb, { maxAge: 10000 })
    res.send('thank you for your feedback <a href="feedback-details">show feedback</a>')
})
app.get('/feedback-details', (req, res) => {
    data = req.cookies.feedback
    if (data) {
        res.send(`${JSON.stringify(data)} <a href="/">logout</a>`)
    }
    else {
        res.send('no cookies available')
    }
})
app.listen(5002)