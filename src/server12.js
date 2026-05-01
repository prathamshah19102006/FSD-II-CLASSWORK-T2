const { urlencoded } = require('express')

expr=require('express')
app=expr()
app.use(urlencoded({'extended':true}))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('form')
})
app.post('/data',(req,res)=>{
    fname=req.body.fname
    mark=req.body.marks
    res.render('out',{fname,mark})
})
app.listen(5555,()=>{
    console.log('server-connected')
})