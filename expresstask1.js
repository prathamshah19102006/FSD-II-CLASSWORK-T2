var expr=require('express')
var app=expr()
data=[{
    "name":'jacky',
    age:27
},{
    "name":'neel',
    age:20
},
{
    "name":'jatin',
    age:30
}]
var sorted_result=data.sort((a,b)=>b.age-a.age)
for( x of sorted_result){
    console.log(x.name,x.age)
}
app.get('/sortednames',(req,res)=>{
    res.set('Content-Type','text/plain')
for( x of sorted_result){
    res.write(x.name+" ")
    res.write(x.age+"\n")
}
    res.send()
})

app.get('/',(req,res)=>{
  
    res.json(sorted_result)
})

app.get('/sorted',(req,res)=>{
  
   for( x of sorted_result){
    res.write(x.age+"\n")
}
    res.send()
})
app.listen(5678)