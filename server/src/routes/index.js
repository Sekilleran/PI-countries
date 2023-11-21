const { Router } = require("express");

const getCountryH = require('../handlers/countries/getCountryH');
const getCountryIdH = require('../handlers/countries/getCountryIdH');
const getCountryNameH = require("../handlers/countries/getCountryNameH");
const postActivityH = require("../handlers/activities/postActivityH");
const getActivityH = require("../handlers/activities/getActivityH");

const router = Router();

router.get('/country', getCountryH)
router.get('/country', getCountryNameH)
router.get('/country/:id', getCountryIdH)


router.post('/activity', postActivityH)
router.get('/activity', getActivityH)

module.exports = router;
