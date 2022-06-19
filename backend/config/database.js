const mongoose = require("mongoose");

exports.connectToDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connection to cloud Database successful");
    })
    .catch((err) => {
      console.log("Error ", err);
    });
};
