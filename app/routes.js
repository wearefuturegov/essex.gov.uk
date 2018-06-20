var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Route new page, with title copy

router.get('/paying-for-care', function (req, res) {
  res.render('paying-for-care',
    {
      'heading_x_large': "Paying for care and support",
      'heading_medium': "Paying for care and support",
      'details': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  )
})

router.get('/accomodation-type', function (req, res) {
  res.render('accomodation-type',
    {
      'heading_large': "Find out what you might need to pay",
      'question_1': "Do you live in a house/flat or are you in, or about to go in, residential care?",
      'details_1': "If your Social Worker agrees that you need support from us, you may need to pay something towards the cost. This is calculated based on your ability to pay",
      'details_2': "Use this calculator to work out what your contribution may be. This is not an official document it's a rough guide only. Your informatoin will not be stored.",
      'details_3': "Please note: Your actual contribiution can only be calculated after a Financial Assessement has taken place and will be arranged by your social worker.",
      'option_1': "Flat/house",
      'option_2': "Residential care"
    }
  )
})

router.get('/accomodationType', function (req, res) {
  var option = req.query.accomodationType
  if (option === 'flat-house') {
    res.redirect('savings')
  }
  else {
    res.render('back')
  }
})

router.get('/savings', function (req, res) {
  res.render('savings',
    {
      'heading_large': "Savings and investment",
      'question_1': "What is the total value of your savings and investments",
      'details_1': "Following savings and nd investments will be considered when we calculate your contribution.",
      'details_2': "Stock and shares",
      'details_3': "Savings and investments",
      'details_4': "The value of any additional properties your own (or your share of it if jointly owned)",
      'details_5': "The home that you live in is not included in the Financial Assessement",
      'option_1': "Over £23,250",
      'option_2': "between £14,250 and £23,250",
      'option_3': "less than £14,250",
    }
  )
})

router.get('/savingsValue', function (req, res) {
  var option = req.query.savingsValue
  if (option === 'over') {
    res.redirect('self-funded')
  }
  // if (option === 'between') {
  //   res.redirect('back')
  // }
  else {
    res.render('back')
  }
})

router.get('/self-funded', function (req, res) {
  res.render('self-funded',
    {
      'heading_large': "Self funded care",
      'details_1': "You have more than £23,250. This means that you will be assessed as being able to meet the full cost of your care."
    }
  )
})

// router.get('/this-page', function (req, res) {
//   // get the answer from the query string (eg. ?over18=false)
//   var musictaste = req.query.musictaste
//
//   if (musictaste === 'bad') {
//     // redirect to the relevant page
//     res.redirect('that-page')
//   } else {
//     // if over18 is any other value (or is missing) render the page requested
//     res.render('this-page')
//   }
// })

// reference below

router.get('/taste', function (req, res) {
  res.render('taste',
    {
      'title': "Title",
      'this_button': "This page",
      'that_button': "That page"
    }
  )
})

// router.get('/multiple_choice', function (req, res) {
//   res.render('multiple_choice',
//     {
//       'title': "Something as a title",
//       'this_button': "This page",
//       'that_button': "That page"
//     }
//   )
// })

// route logic

// router.get('/this-page', function (req, res) {
//   // get the answer from the query string (eg. ?over18=false)
//   var musictaste = req.query.musictaste
//
//   if (musictaste === 'bad') {
//     // redirect to the relevant page
//     res.redirect('that-page')
//   } else {
//     // if over18 is any other value (or is missing) render the page requested
//     res.render('this-page')
//   }
// })

// router.get('/multiple-choice', function (req, res) {
//   // get the answer from the query string (eg. ?over18=false)
//   var musictaste = req.query.musictaste
//
//   if (musictaste === 'bad') {
//     // redirect to the relevant page
//     res.redirect('that-page')
//   } else {
//     // if over18 is any other value (or is missing) render the page requested
//     res.render('this-page')
//   }
// })

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
