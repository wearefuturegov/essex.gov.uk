var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Route new page, with title copy

router.get('/taste', function (req, res) {
  res.render('taste',
    {
      'title': "Something as a title",
      'this_button': "This page",
      'that_button': "That page"
    }
  )
})

router.get('/multiple_choice', function (req, res) {
  res.render('multiple_choice',
    {
      'title': "Something as a title",
      'this_button': "This page",
      'that_button': "That page"
    }
  )
})

// route logic

router.get('/this-page', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var musictaste = req.query.musictaste

  if (musictaste === 'bad') {
    // redirect to the relevant page
    res.redirect('that-page')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.render('this-page')
  }
})

router.get('/multiple-choice', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var musictaste = req.query.musictaste

  if (musictaste === 'bad') {
    // redirect to the relevant page
    res.redirect('that-page')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.render('this-page')
  }
})

// On submit, send the form data to a file named "/form_action_attribute_name.html"
// https://www.w3schools.com/tags/att_form_action.asp

// router.post('/form_action_attribute_name', function (req, res) {
//   var options = req.body["option"]
//
//   if (options == 'this_page') {
//     res.redirect('this_page')
//   }
//   else {
//     res.redirect('that_page')
//   }
// })

module.exports = router
