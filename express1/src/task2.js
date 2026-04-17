

expr=require('express')
app=expr()
app.use(expr.static('../public',{index:'2.html'}))
app.use(expr.urlencoded({extended:true}))
app.post('/process-post',(req,res)=>{
     username=req.body.firstname
     password=req.body.password
     gender=req.body.r1
     res.set('Content-Type','text/html')
     res.write(`<h1 style="color:red">${username}</h1>`)
      res.write(`<h1 style="color:green">${password}</h1>`)
       res.write(`<h1 style="color:black">${gender}</h1>`)
       res.send()
})
app.listen(3007,()=>{
    console.log('server-connected')
})