expr=require('express')
app=expr()
ss=require('express-session')
app.use(expr.static('../public',{index:'6.html'}))
app.use(ss({
    secret:'my123',
    resave:true,
    saveUninitialized:false
}))
app.get('/data',(req,res)=>{
    req.session.fname=req.query.name
    req.session.pwd=req.query.password
    res.redirect('/fetch')
})
app.get('/fetch',(req,res)=>{
    res.type('text/html')
    res.write(`welcome ${req.session.fname}`)
    res.write("<a href='/destroy'>logout</a>")
    res.send()

})
app.get('/destroy',(req,res)=>{
   // req.session.destroy()
    res.clearCookie('connect.sid')
    res.send()
})
app.listen(5556,()=>{
    console.log('server-connected')
})