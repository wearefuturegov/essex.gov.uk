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
    res.redirect('financial-checker/savings-and-investment')
  }
  else {
    res.render('financial-checker/where-do-you-live')
  }
})

// savings and investments

router.get('/savingsValue', function (req, res) {
  var option = req.query.savingsValue
  if (option === 'over') {
    res.redirect('financial-checker/self-funded-care')
  }
  else {
    res.render('financial-checker/age')
  }
})

// age

router.get('/howOld', function (req, res) {
  var option = req.query.howOld
  if (option === 'eighteen') {
    res.redirect('financial-checker/benefits')
  }
  else if (option === 'twentyfour') {
    res.redirect('financial-checker/benefits')
  }
  else {
    res.render('financial-checker/private-pensions')
  }
})


// pensions

router.get('/privatePension', function (req, res) {
  var option = req.query.privatePension
  if (option === 'yes') {
      res.redirect('financial-checker/benefits')
    }
  else {
    res.render('financial-checker/state-pensions')
  }
})


router.get('/statePension', function (req, res) {
  var option = req.query.statePension
  if (option === 'yes') {
    res.redirect('financial-checker/state-pensions')
  }
  else {
    res.render('financial-checker/benefits')
  }
})

// benefits

router.get('/benefits', function (req, res) {
  var option = req.query.benefits
  if (option === 'yes') {
    res.redirect('financial-checker/benefits')
  }
  else {
    res.render('financial-checker/rent-property')
  }
})


// rent out property

router.get('/rentProperty', function (req, res) {
  var option = req.query.rentProperty
  if (option === 'yes') {
    res.redirect('financial-checker/rent-property')
  }
  else {
    res.render('financial-checker/other-income')
  }
})


// other income

router.get('/otherIncome', function (req, res) {
  var option = req.query.otherIncome
  if (option === 'yes') {
    res.redirect('financial-checker/other-income')
  }
  else {
    res.render('financial-checker/self-funded-care')
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
