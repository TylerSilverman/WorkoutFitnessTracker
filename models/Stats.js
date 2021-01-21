const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StatsSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  weight: [
    {
      type: Schema.Types.ObjectId,
      ref: "Weight"
    }
  ]
});

const Stats = mongoose.model("Stats", StatsSchema);

module.exports = Stats;