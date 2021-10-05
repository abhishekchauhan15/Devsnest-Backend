const User = require("../modles/user");
const bcrypt = require("bcrypt");

// check if email already exists
// password hash
// email lowercase
// save

const satRound = 10;
const register = (req, res, next) => {
  const { email, password } = req.body;
  try {
    const alreadyExixts = await User.findOne({ where: { email } });
    if (alreadyExixts) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(myPlaintextPassword, salt);
    // Store hash in your password DB.

    const uewUser = new User({ email: email.lowercase(), passoerd: hash });
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("something went worong");
  }
};

module.exports = register;
