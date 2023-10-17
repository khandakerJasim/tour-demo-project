const User2 = require("./../model/Userschema2");
const Generatetoken = require("./../connection/Token");
const validid = require("./../utilities/Validatemongodbid");
exports.register2 = async (req, res) => {
  const email = req.body.email;
  try {
    const preuser = await User2.findOne({ email: email });
    if (!preuser) {
      const newuser = await User2.create(req.body);
      res.status(200).json(newuser);
    } else {
      res.status(400).json("the user is already exits");
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

exports.loginuser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const finduser = await User2.findOne({ email });
    if (finduser && (await finduser.isPasswordMatch(password))) {
      res.status(200).json({
        _id: finduser?._id,
        fname: finduser?.fname,
        lname: finduser?.lname,
        email: finduser?.email,
        phone: finduser?.phone,
        token: Generatetoken(finduser?._id),
      });
      res.cookie(process.env.COOKIENAME, token, {
        maxAge: process.env.EXPIRE,
        httpOnly: true,
      });
    } else {
      throw new Error("invalid cridantioal");
    }
  } catch (err) {
    res.status(500).json({ err, message: "this is server error" });
    console.log(err);
  }
};

exports.alluser = async (req, res) => {
  try {
    const alluser = await User2.find();
    res.status(200).json(alluser);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

//singleuser

exports.singleuser = async (req, res) => {
  const { id } = req.params;
  validid(id);
  try {
    const singleuser = await User2.findById(id);
    res.status(200).json(singleuser);
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};

exports.updateuser = async (req, res) => {
  const { _id } = req.user;
  validid(_id);
  try {
    const Updateuser = await User2.findByIdAndUpdate(
      _id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(Updateuser);
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};

exports.deleteuser = async (req, res) => {
  const { id } = req.params;
  validid(id);
  try {
    const Deleteuser = await User2.findByIdAndDelete(id);

    res.json(Deleteuser);
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};

//isAdmin

exports.Isadmin = async (req, res, next) => {
  const email = req.user;
  try {
    const adminuser = await findOne(email);
    if (adminuser.role !== "admin") {
      throw new Error("you are not admin");
    } else {
      next();
    }
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
};
