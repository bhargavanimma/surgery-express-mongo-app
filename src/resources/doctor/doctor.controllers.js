import { Doctor } from './doctor.model'

export const me = (req, res) => {
  res.status(200).json({ data: req.user })
}

export const updateMe = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.user._id, req.body, {
      new: true
    })
      .lean()
      .exec()

    res.status(200).json({ data: doctor })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}
