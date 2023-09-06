import mongoose from "mongoose";
const { Schema } = mongoose;

const BusinessSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: String,
    address: String,
    city: String,
    region: String,
    country: String,
    coords: {
      type: [Number],
      index: "2dsphere",
    },
    createDate: {
      type: Date,
      default: Date.now,
    },
    devices: [Schema.Types.Mixed], // This allows you to store any type of data in the array.
    links: [String],
    categories: [String],
    purifiers: Number,
  },
  { timestamps: true },
);

export default mongoose.model("Business", BusinessSchema);
