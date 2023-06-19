import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

loadType(mongoose);

const ProductSchema = new mongoose.Schema(
  {
    price: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: v => v / 100,
    },
    expense: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: v => v / 100,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  {
    toJSON: { getters: true },
    timestamps: true,
  }
);

export default mongoose.model("Product", ProductSchema);
