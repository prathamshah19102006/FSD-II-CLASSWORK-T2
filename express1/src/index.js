expr=require('express')
app=expr()
app.use(expr.static('../public'))
app.listen(5678,()=>{
    console.log('server connected')
})