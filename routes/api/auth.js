const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

// Login user
router.post("/login", (req, res) => {
    const { email, pword } = req.body;

    // Simple validation
    if (!email || !pword) {
        return res.status(400).send({ msg: "Please enter all fields" });
    }

    // Check for existing user
    User.findOne({ email }).then(user => {
        if (!user) return res.status(400).send({ msg: "User does not exist" });

        // Validate password
        bcrypt.compare(pword, user.pword).then(isMatch => {
            if (!isMatch)
                return res.status(400).json({ msg: "Invalid credentials" });

            jwt.sign(
                { id: user._id },
                config.get("jwtSecret"),
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        user: {
                            _id: user._id,
                            fname: user.fname,
                            lname: user.lname
                        }
                    });
                }
            );
        });
    });
});

module.exports = router;
