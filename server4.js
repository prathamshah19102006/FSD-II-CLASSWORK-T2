var expr=require('express')
var app=expr()
// app.get('/:id',(req,res)=>{
//     res.send(req.params)
// })
app.get('/user/:uname/test/:result',(req,res)=>{
    res.send(`<h1>welcome ${req.params.uname} python-II T1 result is ${req.params.result}</h1>`)
})
app.listen(5009)