expr=require('express')
app=expr()
ss=require('express-session')
app.use(ss({
    secret:'dearmysy',
    resave:true,
    saveUninitialized:true
}))
app.get('/',(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++
        res.send(`you visited page${req.session.page_views}`)
    }
    else{
        req.session.page_views=1
        res.send('welcome you visited page')
    }
})
app.listen(5555)