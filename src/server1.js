expr=require('express')
app=expr()
app.use(expr.static('../public',{index:'jambo.html'}))
app.listen(5670,()=>{
    console.log('server-connected')
})