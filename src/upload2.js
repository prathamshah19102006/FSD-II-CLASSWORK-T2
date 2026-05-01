expr=require('express')
app=expr()
multer=require('multer')
app.use(expr.static('../public',{index:'upload.html'}))
var storage=multer.diskStorage({
    destination:'hi',
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
var upload=multer({storage})
app.post('/data',upload.array('mypic',3),(req,res)=>{
    const file=req.files
    if(file){
        for(i of file){
        res.write(i.originalname +" "+ i.destination)
    }
    res.send()
}
    else{
        res.send('file not found')
    }
})
app.listen(5557)