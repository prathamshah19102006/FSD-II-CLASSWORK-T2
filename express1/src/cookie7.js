expr=require('express')
app=expr()
ss=require('express-session')
app.use(expr.static('../public',{index:'6.html'}))
app.use(ss({
    secret:'my123',
    resave:true,
    saveUninitialized:false,
    cookie:{maxAge:10000}
}))
app.get('/data',(req,res)=>{
    req.session.fname=req.query.name
    req.session.pwd=req.query.password
    res.redirect('/fetch')
})
app.get('/fetch',(req,res,next)=>{
    res.type('text/html')
    if(req.session.fname==='admin'&& req.session.pwd==='admin@123'){
    res.write(`welcome ${req.session.fname}`)
    res.write("<a href='/destroy'>logout</a>")
    res.send()
    
    }
    else{
    res.send(`Please enter valid username and password
        <a href='/'>login link</a>`)
    }
})
app.get('/destroy',(req,res)=>{
   req.session.destroy()
   res.redirect('/')

})
app.listen(5557)