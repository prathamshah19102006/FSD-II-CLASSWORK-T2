var expr=require('express')
var app=expr()
app.use(expr.urlencoded({extended:true}))
checkusername=(req,res,next)=>{
    if(req.body.uname==='admin'){
    console.log('username checked')
    next()
    }
    res.write('<h1 style="color:red">warning message</h1>')
    res.send()

}
welcomeprint=(req,res,next)=>{
    console.log('welcome admin')
    next()
}
app.use('/check',checkusername,welcomeprint)

app.get('/',(req,res)=>{
    res.send(`<form action="/check" method="post">
        uname:<input type="text" name="uname" placeholder="please aa details bhaar">
        password:<input type="number" name="password" placeholder="enter password">
        <input type="submit">
        </form>`)
})
app.post('/check',(req,res)=>{
   username=req.body.uname
   console.log(username)
   res.send()

})
app.listen(5678)