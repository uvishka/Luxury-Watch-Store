import mongoose from "mongoose";

const watchSchema = mongoose.Schema(
    {
        brand: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        year: {
            type: Number,
        },
        refno: {
            type: String,
        },
        condition: {
            type: String,
        },

    },
    {
        timestamps: true,
    }
);

export const Watch = mongoose.model('Watch', watchSchema);
