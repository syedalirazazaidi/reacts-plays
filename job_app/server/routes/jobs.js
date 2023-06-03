const express = require('express')

const router = express.Router()
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
  getAllStatJobs,
  // getDemoJob,
} = require('../controllers/jobs')

router.route('/').post(createJob).get(getAllJobs)
router.route('/getstats').get(getAllStatJobs)
// router.route('/:id').get(getDemoJob)
router.route('/:id').get(getJob).delete(deleteJob).put(updateJob)

module.exports = router
