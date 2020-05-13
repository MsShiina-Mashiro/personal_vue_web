// let express = require('express')
// let router = express.Router()
// var CircularJSON = require('circular-json');
// var getRes = require('./getRes')
// //const conn = require('./db')

// router.post('/api/login',async (req, res) => {
//   var user
//   //console.log(req.body)
//   // function getRes(callback) {
//   //   conn.query("select * from login where username = '"+ req.body.username + "'and password = '"+ req.body.password + "'", async (err, results) => {
//   //     if(err) throw err
//   //     user = await results
//   //     callback(results)
//   //     console.log('内部的user是',user)
//   //   })
//   // }
  
//   getRes.getRes((req, result) => {
//     user = result
//     console.log("getRes内部的user是",user)
//     console.log('外部的user是',user)
//   if(!user) {
//     return res.status(422).send({
//       msg: '用户名不存在'
//     })
//   }
//   const isPasswordValid = () => {
//     return this.req.body.password === user.password
//   }
//   // const isPasswordValid = require('bcrypt').compareSync(
//   //   req.body.password,
//   //   user.password
//   // )
//   if(!isPasswordValid) {
//     return res.status(422).send({
//       msg: '密码无效'
//     })
//   }

//   const jwt = require('jsonwebtoken')
//   const token = jwt.sign({
//     id: String(user.username)
//   },'sdfhsed44626246sfgds')
//   res.send({
//     user: CircularJSON.stringify(user),
//     token
//   })
//   })
  
// })

// // router.post('/api/getUserMsg', async (req, res) => {
// //   let sqlStr = 'select * from login'
// //   conn.query(sqlStr, (err, results) => {
// //     if(err) {
// //       res.json({
// //         code: 1,
// //         msg: '获取数据失败'
// //       })
// //     }else{
// //       res.json({
// //         code: 0,
// //         login: results
// //       })
// //     }
    
// //   })
// // })

// module.exports = router