const express = require('express')
const router = express.Router()

const { body, validationResult } = require('express-validator');
const bcrypt=require("bcryptjs");
const webtoken=require("jsonwebtoken");
const jwtsecrret="MychannelnameisM-coder"

const User = require('../models/User')
router.post(
  '/createuser',
  [
    body('email').isEmail(),
    // password must be at least 5 chars long
    // Incorrect password -> can give messages
    body('password', 'Incorrect password').isLength({ min: 5 }),
    body('name').isLength({ min: 5 }),
  ],

  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const salt=await bcrypt.genSalt(10);
    const securepass= await  bcrypt.hash(req.body.password,salt);

    try {
      await User.create({
        name: req.body.name,
        password: securepass,
        email: req.body.email,
        location: req.body.location,
      })
      res.json({ success: true })
    } catch (error) {
      console.log(error)
      res.json({ success: false })
    }
  },
)
router.post(
  '/loginuser',
  [
    body('email').isEmail(),

    body('password', 'Incorrect password').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    let email = req.body.email;
    try {
      let userdata = await User.findOne({ email })
      if (!userdata) {
        return res.status(400).json({ errors: 'try again' });
      }
      const bwtpass=await bcrypt.compare(req.body.password,userdata.password);
      if (!bwtpass) {
        return res.status(400).json({ errors: 'try again' });
      }
      const data={
        userr:{
          id:userdata.id,
        }

      }
      const authToken= webtoken.sign(data,jwtsecrret);

      return res.json({ success: true ,authToken:authToken})
    } catch (error) {
      console.log(error)
      res.json({ success: false })
    }
  },
)
module.exports = router
