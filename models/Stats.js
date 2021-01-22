const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StatsSchema = new Schema({
  ObjectId: {
      _id: Schema.Types.ObjectId,
    },
    day:{
      type: Date,
      default: Date.now
    },
    type: {
      type: String,
    },
    name: {
      type: String,
    },
    exercise: Array
});

const Stats = mongoose.model("Stats", StatsSchema);

module.exports = Stats;