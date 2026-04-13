var expr=require('express')
var app=expr()
addname=(req,res,next)=>{
    req.name='maithil'
    console.log('NAME ADDED')
    next()

}
subname=(req,res,next)=>{
    req.sub='probability and sochastic process'
    console.log('subject-added')
    next()
}
submarks=(req,res,next)=>{
    req.marks=25
    console.log('marks-added')
    next()
}
app.use('/data',addname,subname,submarks)
app.get('/data',(req,res)=>{
    res.send(`<h1>name of student is ${req.name}
        subject name ${req.sub}
        subject marks ${req.marks}
        </h1>`)
})
app.listen(5678)
