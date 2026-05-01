var expr=require('express')
//app=expr()
router=expr.Router()
const mvi=[{id:'101',name:'don-1',year:'2006'},{id:'102',name:'don-2',year:'2012'},{id:'103',name:'don-3',year:'2013'}]
router.get('/m',(req,res)=>{
    res.json(mvi)
})
router.get('/m/:id',(req,res)=>{
    cm=mvi.filter((a)=>a.id===req.params.id)
    if(cm.length===1){
        res.json(cm[0])
    }
    else{
        res.send('no data found')
    }
})
//app.listen(5555)
module.exports=router