const db = require('../models');

const showOneUser = (req, res) => {
  db.User.findById(req.params.userId, (err, foundUser) => {
    if(err) return console.log(err);
    if(foundUser) {
      res.json({
        status: 200,
        count: 1,
        data: foundUser,
        requestedAt: new Date().toLocaleString(),
      });
    } else {
      res.json({
        status: 404,
        count: 0,
        data: `Event with ID ${req.params.userId} was not found.`
      })
    }
  })
};

const showAllUsers = (req, res) => {
  db.User.find({}, (err, allUsers) => {
    if (err) return res.status(500).json({
      status: 500,
      error: [{message: 'Could not desplay all houses. Please try again.'}]
    })
    res.json({
      status: 200,
      count: allUsers.length,
      data: allUsers,
      requestedAt: new Date().toLocaleString(),
    })
  });
};

const editCurrentUser = (req, res) => {
  db.User.findByIdAndUpdate(
    req.params.userId,
    req.body,
    {new: true}, (error, updatedUser) => {
      if (error) return res.status(500).json({
        status: 500,
        error: [{message: 'Something went wrong! Please try again'}],
      });

      res.json({
        status: 200,
        count: 1,
        data: updatedUser,
        requestedAt: new Date().toLocaleString()
      })
    })
}

const deleteCurrentUser = (req, res) => {
  db.User.findByIdAndDelete(
    req.params.userId, (err, deleteUser) =>{
      if (err)  return res.status(500).json({
        status: 500,
        error: [{message: 'Something went wrong! Please try again'}],
      });
      res.json({
        status:200,
        count: 1,
        data: deleteUser,
        requestedAt: new Date().toLocaleString(),
      })
    })
}


module.exports = {
  showOneUser,
  showAllUsers,
  editCurrentUser,
  deleteCurrentUser
}