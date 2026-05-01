var expr = require('express')
//app=expr()
router = expr.Router()
const mvi = [{ id: '101', name: 'don-1', branch: 'cse', contact: '909090', city: 'abd' }, { id: '102', name: 'don-2', branch: 'cse', contact: '909090', city: 'abd' }, { id: '103', name: 'don-3', branch: 'it', contact: '909090', city: 'abd' }, { id: '103', name: 'don-3', branch: 'it', contact: '909090', city: 'abd' }, { id: '103', name: 'don-3', branch: 'it', contact: '909090', city: 'abd' }]
router.get('/m', (req, res) => {
    res.json(mvi)
})
router.get('/', (req, res) => {
    res.json(mvi)
})
router.get('/:id', (req, res) => {
    cm = mvi.filter((a) => a.id === req.params.id)
    if (cm.length === 1) {
        res.json(cm[0])
    }
    else {
        res.send('no data found')
    }
})
router.get('/branch/:branch', (req, res) => {
    cm = mvi.filter((a) => a.branch.toLowerCase() === req.params.branch.toLowerCase())
    console.log(cm)
    if (cm.length >= 1) {
        for (i of cm) {
            res.write(JSON.stringify(i))
        }
        res.send()
    }
    else {
        res.send('no data found')
    }
})
//app.listen(5555)
module.exports = router
