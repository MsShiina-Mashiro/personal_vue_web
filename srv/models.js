const mongoose = require('mongoose')

mongoose.connect(' mongodb://127.0.0.1:27017/my_vue_web',{
  useCreateIndex: true,
  useNewUrlParser: true
})

const UserSchema = new mongoose.Schema({
  username: {
    type: String, unique: true
  },
  password: {
    type: String, 
    set(val) {
      return require('bcryptjs').hashSync(val, 10)
    }
  }
})

const User = mongoose.model('User', UserSchema)
// User.db.dropCollection('users')
module.exports = { User }