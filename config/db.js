const mongoose = require("mongoose");
const assert = require("assert");
const Connect = async () => {
  try {
    const responce = await mongoose.connect(process.env.DB_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("---Mongodb-Connected---");
  } catch (error) {
    // check error
    assert.strictEqual(error, null, "Database connection failed");
  }
};

module.exports = Connect;
