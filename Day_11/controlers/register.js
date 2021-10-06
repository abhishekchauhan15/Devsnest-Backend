const User = require("../models/user");
const bcrypt = require("bcrypt");

// check if email already exists
// password hash
// email lowercase
// save

const satRound = 10;
const register = async (req, res) => {
  const { email, password } = req.body;
  //it is db call and db call is time consuming and it will stuck in event loop then it has to wait so we use async await
  try {
    const alreadyExixts = await User.findOne({ where: { email } });
    if (alreadyExixts) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(myPlaintextPassword, salt);
    // Store hash in your password DB.

    const uewUser = new User({
      email: email.lowercase(),
      password: hash,
      fullName: req.body.fullName,
    });
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("something went worong");
  }
};

module.exports = register;
