import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

loadType(mongoose);

const transactionSchema = new mongoose.Schema(
  {
    buyer: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: v => v / 100,
    },
    amount: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: v => v / 100,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    toJSON: { getters: true },
    timestamps: true,
  }
);

export default mongoose.model("Product", transactionSchema);
