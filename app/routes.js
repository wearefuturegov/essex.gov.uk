var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Route new page, with title copy

// accomodation

router.get('/accomodationType', function (req, res) {
  var option = req.query.accomodationType
  if (option === 'flat-house') {
    res.redirect('savings-and-investment')
  }
  else {
    res.render('where-do-you-live')
  }
})

router.get('/savingsValue', function (req, res) {
  var option = req.query.savingsValue
  if (option === 'over') {
    res.redirect('self-funded-care')
  }
  // if (option === 'between') {
  //   res.redirect('back')
  // }
  else {
    res.render('savings-and-investment')
  }
})

// what-financial-assessment


module.exports = router
