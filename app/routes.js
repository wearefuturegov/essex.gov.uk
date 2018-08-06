var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Route new page, with title copy



// FINANCIAL CHECKER FORM

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
  //   res.redirect('private-pension')
  // }
  else {
    res.render('savings-and-investment')
  }
})

// what-financial-assessment


module.exports = router



// FINANCIAL ASSESSMENT FORM

// needs assessment confirmation

router.get('/careneedsAssessed', function (req, res) {
  var option = req.query.careneedsAssessed
  if (option === 'yes') {
    res.redirect('declare-finances')
  }
  else {
    res.render('needs-assessment')
  }
})

// declaration of finances

router.get('/declareFinances', function (req, res) {
  var option = req.query.declareFinances
  if (option === 'yes') {
    res.redirect('bank-accounts-savings')
  }
  // if (option === 'between') {
  //   res.redirect('private-pension')
  // }
  else {
    res.render('end-financial-assessment')
  }
})

// confirm bank accounts, savings and investments

router.get('/bankAccounts', function (req, res) {
  var option = req.query.bankAccounts
  if (option === 'yes') {
    res.redirect('bank-accounts-savings')
  }
  else {
    res.render('bank-accounts-savings')
  }
})
