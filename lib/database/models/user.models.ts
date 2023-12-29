import { models, Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    clerkId: { type: "string", required: true, unique: true },
    email: { type: "string", required: true, unique: true },
    username: { type: "string", required: true, unique: true },
    firstname: { type: "string", required: true },
    lastname: { type: "string", required: true },
    photo: { type: "string", required: true },
  },
  { timestamps: true }
);

export const User = models.User || model("User", UserSchema);
