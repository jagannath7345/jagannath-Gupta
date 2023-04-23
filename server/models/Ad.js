const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  companyId: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"company"
  },
  primaryText: { type: String, required: true },
  headline: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model("ad", adSchema);
