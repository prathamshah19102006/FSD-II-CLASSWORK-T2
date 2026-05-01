expr=require('express')
app=expr()
multer=require('multer')
app.use(expr.static('../public',{index:'upload.html'}))
app.use(expr.static('../public',{index:'effect.css'}))
var storage=multer.diskStorage({
    destination:'File',
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-file.pdf")
    }
})
var upload=multer({storage,limits:{fileSize:1024*1024}})
app.post('/upload',upload.single('data'),(req,res)=>{
    const file=req.file
    if(file){
       
        res.send(`${file.originalname}HAS BEEN UPLOADED`)
}
    else{
        res.send('file not found')
    }
})
app.listen(5556)