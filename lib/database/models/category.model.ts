import mongoose, { Document, Schema, model } from "mongoose";

export interface Icategory extends Document {
  _id: String;
  name: String;
}
const categorySchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
  },
  { timestamps: true }
);

export const Category = model("Category", categorySchema);
