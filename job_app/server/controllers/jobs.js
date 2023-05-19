const Job = require('../models/Job')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllJobs = async (req, res) => {
  const PAGE_SIZE = 6
  const page = req.query.page
  const total = await Job.countDocuments({})

  // { createdBy: req.user.userId }
  const jobs = await Job.find()
    .sort('createdAt')
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page)
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length, total })
}
const getJob = async (req, res) => {
  const {
    // user: { userId },
    params: { id: jobId },
  } = req
  console.log(req.user.userId)
  const job = await Job.findOne({
    _id: jobId,
    // createdBy: userId,
  })

  if (!job) {
    // throw new NotFoundError(`No job with id ${jobId}`)
    res.send(`No job with id ${jobId}`)
    // return res
    //   .status(StatusCodes.CREATED)
    //   .json({ msg: `No job with id ${jobId}` })
  }
  res.status(StatusCodes.OK).json({ job })
}

const createJob = async (req, res) => {
  console.log(req.body)
  // req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
}

const updateJob = async (req, res) => {
  const {
    body: { company, position, location, status, job_type },
    // user: { userId },
    params: { id: jobId },
  } = req

  if (
    company === '' ||
    position === '' ||
    location === '' ||
    status === '' ||
    job_type === ''
  ) {
    return res
      .status(StatusCodes.CREATED)
      .json({ msg: `Company or Position fields cannot be empty` })

    // throw new BadRequestError('Company or Position fields cannot be empty')
  }
  const updatedPost = {
    company,
    position,
    location,
    status,
    job_type,
  }

  // const newData = await Job.findByIdAndUpdate(jobId, updatedPost, { new: true })
  // console.log(newData, '}}}')
  const job = await Job.findByIdAndUpdate(
    {
      _id: jobId,
      // createdBy: userIds
    },
    req.body,
    { new: true },
  )
  // console.log('ED JOB CREATED', job)
  if (!job) {
    res.send(`No job with id ${jobId}`)
  }
  res.status(StatusCodes.OK).json({ job })
}

const deleteJob = async (req, res) => {
  const {
    // user: { userId },
    params: { id: jobId },
  } = req

  const job = await Job.findByIdAndRemove({
    _id: jobId,
    // createdBy: userId,
  })
  if (!job) {
    return res
      .status(StatusCodes.CREATED)
      .json({ msg: `No job with id ${jobId}` })
    // throw new NotFoundError(`No job with id ${jobId}`)
  }
  res.status(StatusCodes.OK).send()
}

module.exports = {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
}
