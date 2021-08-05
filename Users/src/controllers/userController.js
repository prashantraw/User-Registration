const User = require('../models/user')
const { createOne, getAll, getOne, updateOne, deleteOne } = require('./handlerFactory')

exports.createUser = createOne(User)
exports.getAllUsers = getAll(User)
exports.updateUser = updateOne(User)
exports.deleteUser = deleteOne(User)
exports.getUser = getOne(User)