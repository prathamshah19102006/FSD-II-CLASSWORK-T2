var expr=require('express')
var app=expr()
app.get('/',(req,res)=>{
    res.set('Content-Type','text/html')
    res.send('<h1>how are you</h1>')
})
app.get('/about',(req,res)=>{
    res.send('<h1>about page</h1>')
})
app.listen(5678,()=>{
    console.log('server-connected')
})