var expr=require('express')
var app=expr()
app.use(expr.urlencoded({extended:true}))
app.get('/',(req,res)=>{
   
    res.send(`<form action="/login" method="get">
        uname:<input type="text" name="uname" placeholder="please aa details bhaar">
        password:<input type="number" name="password" placeholder="enter password">
        <textarea name='message' placeholder="enter message"></textarea>
        <input type="submit">
        </form>`)
})
app.get('/login',(req,res,next)=>{
    uname=req.query.uname
    password=req.query.password
    message=req.query.message
    res.send(`${uname}  ${password}  ${message}  
        <a href="/message">show vowel</a>`)
        next()
})
app.get('/message',(req,res)=>{
console.log(message)
message=message.split(" ")
count=0
for(i of message){

    i=i.split("")
    // console.log(i)
    for(i1 of i){
        // console.log(i1)
        if(i1=='a'||i1=='e'||i1=='i'||i1=='o'||i1=='u'){
            console.log(`vowel is ${i1} `)
             count=count+1
        }
    }
}
res.send(count)
})
app.listen(5678)