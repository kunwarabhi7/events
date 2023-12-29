import { Schema, models, model, Document } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  startDateTime: Date;
  endDateTime: Date;
  imageUrl: string;
  price?: string;
  isFree: boolean;
  url?: string;
  category: { _id: string; name: string }; // Assuming Category is another Mongoose model
  organizer: { _id: string; firstName: string; lastName: string }; // Assuming User is another Mongoose model
}

const EventsSchema = new Schema(
  {
    title: { type: String, reqiored: true },
    description: { type: String },
    location: { type: String },
    createdAt: { type: String, defalt: Date.now },
    startDateTime: { type: String, defalt: Date.now },
    endDateTime: { type: String, defalt: Date.now },
    imageUrl: { type: String, required: true },
    price: { type: String },
    isFree: { type: Boolean, default: false },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    organizer: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Events = models.Events || model("Events", EventsSchema);
