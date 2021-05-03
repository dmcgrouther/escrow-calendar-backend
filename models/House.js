const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HouseSchema = new Schema({
  streetAddress: { 
    type: String, 
    required: true
  },
  zipCode: {
    type: String,
    required: true
  },
  stateHouseIsIn: {
    type: String,
    required: true
  },

  description: {
    type: String, 
    required: true 
  },

  escrowHolder: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],



  pictureOfHouse: {
    type: String, 
    required: true 
  },

  acceptanceDate: {
    type: Date,
    required: true
  },
  initialDepositDate: {
    type: Date,
    required: true
  },
  inspectionContingencyRemovalDate: {
    type: Date,
    required: true
  },
  loanContingencyRemovalDate: {
    type: Date,
    required: true
  },
  buyersFinalWalkthroughDate: {
    type: Date,
    required: true
  }, 
  signedClosingPapersDate: {
    type: Date,
    required: true
  },
  closeOfEscrowDate: {
    type: Date,
    required: true
  },
  dateOfClientOwningHouse: {
    type: Date,
    required: true
  }
});

const House = mongoose.model('House', HouseSchema);

module.exports = House;
