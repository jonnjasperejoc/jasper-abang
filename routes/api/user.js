const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

router.get('/', (req, res) => {
      res.send({success: true});
});

router.post('/', (req, res) => {
      const { fname, lname, email, pword } = req.body;
  
      // Simple validations
      if (!fname || !lname || !email || !pword) {
            return res.status(400).json({ msg: 'Please enter all fields' });
      }

      if (pword.length <= 7) {
            return res.status(400).json({ msg: 'Password must be atleast 8 characters' });
      }
  
      // Check for existing user
      User.findOne({ email })
          .then((user) => {
              if (user) return res.status(400).json({ msg: 'User already exist' });
  
              const newUser = new User({
                  fname,
                  lname,
                  email,
                  pword
              });
  
              // Create salt & hash
              bcrypt.genSalt(10, (err, salt) => {
                  bcrypt.hash(newUser.pword, salt, (err, hash) => {
                      if (err) throw err;
                      newUser.pword = hash;
                      newUser.save()
                          .then((user => {
                              jwt.sign(
                                  { id: user.id },
                                  config.get('jwtSecret'),
                                  { expiresIn: 3600 },
                                  (err, token) => {
                                      if (err) throw err;
                                      res.json({
                                          token,
                                          user: {
                                              id: user.id,
                                              fname: user.fname,
                                              lname: user.lname,
                                              email: user.email
                                          }
                                      });
                                  }
                              )
                          }));
                  });
              });
          });
  });

module.exports = router;