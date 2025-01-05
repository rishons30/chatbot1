const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  hospitalName: { type: String, required: true, unique: true },
  availableBeds: { type: Number, required: true },
  departments: { type: [String], required: true },
});

module.exports = mongoose.model("Hospital", hospitalSchema);
