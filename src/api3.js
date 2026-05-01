var expr = require('express')
//app=expr()
router = expr.Router()
const mvi =[

  { name: 'Ahmedabd',country: 'India', state: 'Gujarat', city: 'Ahmedabad',  rating: 10  },

  {name: 'Mumbai', country: 'India',  state: 'Maharashtra', city: 'Mumbai', rating: 9  },

  { name: 'Nairobi', country: 'Kenya',  state: 'Nairobi County', city: 'Nairobi',  rating: 8  },

  { name: 'Melbourne', country: 'Australia',  state: 'Victoria', city: 'Melbourne',  rating: 10  }

];
router.get('/m', (req, res) => {
    res.json(mvi)
})
router.get('/', (req, res) => {
    res.json(mvi)
})
router.get('/rating/:rating', (req, res) => {
    cm = mvi.filter((a) => a.rating == req.params.rating)
  res.send(cm)
})
// router.get('/branch/:branch', (req, res) => {
//     cm = mvi.filter((a) => a.branch.toLowerCase() === req.params.branch.toLowerCase())
//     console.log(cm)
//     if (cm.length >= 1) {
//         for (i of cm) {
//             res.write(JSON.stringify(i))
//         }
//         res.send()
//     }
//     else {
//         res.send('no data found')
//     }
// })
//app.listen(5555)
module.exports = router