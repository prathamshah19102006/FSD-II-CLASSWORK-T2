var expr=require('express')
var app=expr()
app.use(expr.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send(`<form action="/data" method="get">
        uname:<input type="text" name="uname" placeholder="please aa details bhaar">
        age:<input type="text" name="age" placeholder="umaar su che">
        <input type="submit">
        </form>`)
})
app.get("/data",(req,res)=>{
    uname=req.query.uname
    age=req.query.age
    res.send("welcome  "+uname+"  with age   "+age)
})
app.listen(5677,()=>{
    console.log('server connected')
})
