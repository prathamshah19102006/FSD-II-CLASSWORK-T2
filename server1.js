var expr=require('express')
var app=expr()
data={'name':'xyz',age:24}
app.get('/',(req,res)=>{
    // res.type('application/json')
   // res.write(JSON.stringify(data))if we write send must be empty
    // res.json(data)//same as res.send(data)
    res.write(data.age+"")
    res.send()
})
app.listen(5006)
