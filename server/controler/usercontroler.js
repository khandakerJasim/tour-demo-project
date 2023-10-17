const User = require("./../model/UserSchema");
const bcrypt = require("bcrypt");

exports.Register = async (req, res) => {
  const { name, email, phone, password, cpassword, gender } = req.body;

  const hpassword = await bcrypt.hash(password, 10);
  const chpassword = await bcrypt.hash(cpassword, 10);

  try {
    const preuser = await User.findOne({ email });
    if (preuser) {
      res.status(400).json("the user is already exits");
    } else {
      const newuser = await User({
        name: name,
        email: email,
        phone: phone,
        password: hpassword,
        cpassword: chpassword,
        gender: gender,
      });
      const saveuser = await newuser.save();

      res.status(200).json(saveuser);
    }
  } catch (err) {
    res.status(500).json({ mess: "error", err });
    console.log(err);
  }
};
