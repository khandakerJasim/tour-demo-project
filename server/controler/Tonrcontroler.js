const Tours = require("./../model/TourSchema");
exports.tourpost = async (req, res) => {
  const newtour = new Tours(req.body);
  try {
    const savetour = await newtour.save();

    res.status(200).json({ message: "successfull", data: savetour });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.gettour = async (req, res) => {
  try {
    const alltour = await Tours.find({});

    res.status(200).json({ message: "successfull", data: alltour });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.singletour = async (req, res) => {
  const id = req.params.id;

  try {
    const single = await Tours.findById(id);
    res.status(200).json({ message: "successfull", data: single });
  } catch (err) {
    res.status(400).json(err);
  }
};

//delete

exports.deletetour = async (req, res) => {
  const id = req.params.id;
  try {
    const Deletetour = await Tours.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "userdelete successfull", data: Deletetour });
  } catch (err) {
    res.status(400).json(err);
  }
};

//update tour

exports.updatetour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatetour = await Tours.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ message: "update successfull", data: updatetour });
  } catch (err) {
    res.status(400).json(err);
  }
};
