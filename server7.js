var expr=require('express')
var app=expr()
const cb=(req,res,next)=>{
    console.log('i am cb')
    next()
}
const cb1=(req,res,next)=>{
    console.log('i am cb1')
    res.write('<h1>hello</h1>')
    next()
    
}
app.use('/ee',cb,cb1)
app.get('/ee',(req,res)=>{
    res.write('<h1>do not copy directly</h1>')
    res.send()
})
app.listen(5678)