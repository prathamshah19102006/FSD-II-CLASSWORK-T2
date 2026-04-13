var expr=require('express')
var app=expr()
app.get('/user/:id',(req,res)=>{
    id=req.params.id
    uname=req.query.name
    age=req.query.age
    //res.json({id,uname,age})
    res.json({'message':'Data received','params':{id},'query':{uname,age}})
}).listen(8008,()=>{
    console.log('server-connected')
})