//this is for level 1 checks
// email validation 
// passoword validation 
// password ==confirm passoword

const { emailValidate, passwordValidate } = require("../utlis/Validation");

const registerInitialChecks = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;

  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    email.length > 0 &&
    password.length > 0 &&
    confirmPassword === password &&
    emailValidate(email) &&
    passwordValidate(password)  // this is for level 1 checks
  ) {
    next();
  } else {
    return res.status(401).json({
      error: "email, password and confirmPassword must be string",
    });
  }
};

module.exports = registerInitialChecks;
