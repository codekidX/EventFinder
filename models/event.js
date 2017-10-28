const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EventSchema = new Schema(
  {
    createdBy: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    eventType: { type: Number, required: true },
    eventStatus: { type: String, required: true },
    price: { type: String, required: true },
    atendees: { type: Array, required: true },
    image: { type: String, required: true }
  });

  module.exports = mongoose.model('event', EventSchema);
