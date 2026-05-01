const { parse } = require('path')

expr=require('express')
app=expr()
app.use(expr.static('../public',{index:'1.html'}))
app.get('/calc',(req,res)=>{
    n1=parseInt(req.query.n1)
    n2=parseInt(req.query.n2)
    if(req.query.formula==='addition'){
        answer=n1+n2
        res.send('addition'+answer)
    }
    else if(req.query.formula==='subtraction'){
          answer=n1-n2
        res.send('subtraction'+answer)
    }
      else if(req.query.formula==='multi'){
          answer=n1*n2
        res.send('multiplication'+answer)
    }
      else{
          answer=n1/n2
        res.send('division'+answer)
    }
})
app.listen(3006,()=>{
    console.log('server-connected')
})