const db = require('../models');

const createHouse = (req, res) => {
  db.House.create(req.body, (err, createdHouse) => {
    if (err) return res.status(500).json({
      status: 500,
      error: [{message: 'Something went wrong please try again. Could not create the house.'}]
    });
    res.status(201).json({
      status: 201,
      count: 1,
      data: createdHouse,
      dateCreated: new Date().toLocaleString(),
    });
  });
};

const showAllHouses = (req, res) => {
  db.House.find({}, (err, allHouses) => {
    if (err) return res.status(500).json({
      status: 500,
      error: [{message: 'Could not desplay all houses. Please try again.'}]
    })
    res.json({
      status: 200,
      count: allHouses.length,
      data: allHouses,
      requestedAt: new Date().toLocaleString(),
    })
  });
};

const showOneHouse = (req, res) => {
  db.House.findById(req.params.houseId, (err, foundHouse) => {
    if(err) return console.log(err);
    if(foundHouse) {
      res.json({
        status: 200,
        count: 1,
        data: foundHouse,
        requestedAt: new Date().toLocaleString(),
      });
    } else {
      res.json({
        status: 404,
        count: 0,
        data: `Event with ID ${req.params.houseId} was not found.`
      })
    }
  })
};

const editOneHouse = (req, res) => {
  db.House.findByIdAndUpdate(
    req.params.houseId,
    req.body,
    {new: true}, (err, updatedHouse) => {
      if(err) return res.status(500).json({
        status: 500,
        error: [{message: 'Something went wrong with editing!'}],
      });

      res.json({
        status: 200,
        count: 1,
        data: updatedHouse,
        requestedAt: new Date().toLocaleString()
      });
    }
  )
}

const deleteOnehouse = (req, res) => {
  db.House.findByIdAndDelete(
    req.params.houseId, (err, deleteHouse) => {
      if(err) return res.status(500).json({
        status: 500,
        error: [{message: 'Could not delete House!'}],
      });
      res.json({
        status: 200,
        count: 1,
        data: deleteHouse,
        requestedAt: new Date().toLocaleString(),
      })
    }
  )
}

module.exports = {
  createHouse,
  showAllHouses,
  showOneHouse,
  editOneHouse,
  deleteOnehouse
}