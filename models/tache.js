import mongoose, { Schema } from "mongoose";

const tacheSchema = new Schema(
  { titre: String, description: String},
  { timestamps: true }
);
const Tache = mongoose.models.Tache || mongoose.model("Tache", tacheSchema);

export default Tache;