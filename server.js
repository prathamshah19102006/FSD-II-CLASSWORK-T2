var expr=require('express')
var app=expr()
app.get('/',(req,res)=>{
    res.set('Content-type','text/html')
    res.send('<h1>Hello</h1>')

})
app.listen(5006,()=>{
    console.log('server connected')
})