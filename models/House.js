const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HouseSchema = new Schema({
  streetAddress: { 
    type: String, 
    required: true
  },
  description: {
    type: String, 
    required: true 
  }
  //list of dates. 
  //acceptance date --- date
  //initial deposit date --- date 
  //inspection contingency removal date --- date
  //loan contingency removal date --- date
  //buyers final walk through date --- date
  //signed docss with title company date --- date
  //close of escrow date --- date
  //date of client owning house --- date
  //refer to person. someway. it needs to be related. to escrow agent. 
});

const House = mongoose.model('House', HouseSchema);

module.exports = House;
