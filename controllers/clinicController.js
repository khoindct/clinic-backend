const Clinic = require("../models/clinicModel");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

exports.getAllClinics = factory.getAll(Clinic);
exports.getClinic = factory.getOne(Clinic);
exports.updateClinic = factory.updateOne(Clinic);
exports.deleteClinic = factory.deleteOne(Clinic);

exports.createClinic = catchAsync(async (req, res, next) => {
  console.log(req.body);
  // if (!req.file) return res.status(422).send("Please upload a file");
  const clinic = new Clinic(req.body);
  clinic.geometry = JSON.parse(req.body.geometry);
  clinic.coverImage = {
    url: req.file.path,
    filename: req.file.filename,
  };
  await clinic.save();
  res.status(201).json({
    status: "success",
    data: {
      data: clinic,
    },
  });
});
