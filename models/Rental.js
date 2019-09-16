const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RentalSchema = new Schema({
    vehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Vehicle"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    time: {
        type: Number,
        required: true
    }
});

module.exports = Rental = mongoose.model("rentals", RentalSchema);
