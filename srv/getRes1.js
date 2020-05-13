// const conn = require('./db')

// exports.getRes = function (req,callback) {
//   conn.query("select * from login where username = '"+ req.body.username + "'and password = '"+ req.body.password + "'", async (err, results) => {
//     if(err) throw err
//     user = await results
//     callback(results)
//     console.log('内部的user是',user)
//   })
// }