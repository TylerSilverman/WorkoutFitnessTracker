const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StatsSchema = new Schema({
  name: {
    type: String,
  },
  _id: {
      _id: Schema.Types.ObjectId,
    }
});

const Stats = mongoose.model("Stats", StatsSchema);

module.exports = Stats;