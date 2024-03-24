const express = require("express");
const router = express.Router();
const UserModel = require("../models/CustomerScheme");
const { isValidObjectId } = require("mongoose");

router.post("/", async (req, res) => {
  //   const { name, language } = req.body;
  try {
    const Customer = new UserModel(req.body);
    const result = await Customer.save();
    res.send(result).status(200);
  } catch (err) {
    res.status(401).json("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  if (isValidObjectId(req.params.id)) {
    try {
      await UserModel.findById(req.params.id)
        .then((data) => res.status(201).json(data))
        .catch((err) => console.log(err));
    } catch (err) {
      res.status(401).json("Server Error");
    }
  } else res.status(201).json([]);
});

// router.get("/:id", async (req, res) => {
//   try {
//     await UserModel.find({ _id: req.params.id }, {})
//       .then((data) => res.status(201).json(data))
//       .catch((err) => console.log(err));
//   } catch (err) {
//     res.status(401).json("Server Error");
//   }
// });

// router.put("/submit-code/:id", async (req, res) => {
//   try {
//     // console.log(req.body);
//     await UserModel.updateOne(
//       { _id: req.params.id },
//       { $addToSet: { userSubmisson: req.body } }
//     )
//       .then((data) => res.status(201).json("Code Submitted"))
//       .catch((err) => console.log(err));
//   } catch (err) {
//     res.status(401).json("Server Error");
//   }
// });

module.exports = router;
