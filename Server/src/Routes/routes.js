const express = require("express")
const {createFeedback} = require('../Controller/feedbackController')

const router = express.Router()

router.get('/test-me', function (req, res) {
    res.send({ test: "Test-API" })
})

router.post('/api/feedback', createFeedback)


router.all("/*", function (req, res) { res.status(404).send({ status: false, msg: "Invalid HTTP request" }) })

module.exports = router