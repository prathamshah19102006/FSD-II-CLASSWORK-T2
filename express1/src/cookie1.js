expr=require('express')
cp=require('cookie-parser')
app=expr()
app.use(cp())
app.get('/data',(req,res)=>{
    res.cookie('name','express')
    res.cookie('age',28)
    res.cookie('email','exp@gmailcom',{maxAge:2000})
    res.send(req.cookies)

})
app.listen(5006)