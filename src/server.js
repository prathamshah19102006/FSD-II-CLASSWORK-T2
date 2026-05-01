expr=require('express')
app=expr()
app.use(expr.static('../public'))
app.listen(5679,()=>{
    console.log('server-connected')
})