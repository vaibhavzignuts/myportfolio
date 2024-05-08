const mongoose = require("mongoose");

const { Scehma } = mongoose;

const PortfolioSchema = {
  name: String,

  subject: String,

  email: String,

  message: String,
  phone: Number,
};

const PortfolioModel = mongoose.model("Portfolio", PortfolioSchema);

module.exports = PortfolioModel;
