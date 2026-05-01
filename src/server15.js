expr=require('express')
app=expr()
app.use(expr.urlencoded({'extended':true}))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('entry1')
})
app.post('/result',(req,res)=>{
 uname=req.body.name
 uage=parseInt(req.body.age)
 skill=req.body.skills
 experience=parseInt(req.body.exp)
    res.render('out3',{uname,uage,skill,experience})

})
app.listen(5557,()=>{
    console.log('server-connected')
})