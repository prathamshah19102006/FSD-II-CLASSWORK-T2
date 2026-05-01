expr=require('express')
app=expr()
app.use(expr.urlencoded({'extended':true}))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('form1')
})
app.post('/contact',(req,res)=>{
    uname=req.body.name
    uemail=req.body.email
    res.render('out1',{uname,uemail})

})
app.listen(5556,()=>{
    console.log('server-connected')
})