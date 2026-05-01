const { on } = require('events')

expr=require('express')
app=expr()
app.use(expr.static('../public',{index:'3.html'}))
app.use(expr.urlencoded({extended:true}))
app.get('/login',(req,res)=>{
     res.set('Content-Type','text/html')
    username=req.query.name
    emailid=req.query.email
    res.write(`welcome${username} with emailid ${emailid}`)
    if(req.query.newsletter=='on'){
        res.write('Thank you for the subscription')
        res.write('<a href="/">logout link</a>')
        res.send()
    }
})
app.listen(3008,()=>{
    console.log('server-connected')
})