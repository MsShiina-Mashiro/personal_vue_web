const express = require('express')
const { User } = require('./models')
const app = express()
app.use(require('cors')())
app.use(express.json())

app.get('/api/users', async (req, res) => {
  const users = await User.find()
  res.send(users)
})

app.post('/api/register', async (req,res) => {
//   const content = 'OK'
// 　res.set({'Access-Control-Allow-Origin': 'http://127.0.0.1:3000'})
// 　　　.send(content)
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
  })
  res.send(user)
})

app.post('/api/login', async (req, res) => {
  const user = await User.findOne({
    username: req.body.username
  })
  if(!user){
    return res.status(422).send({
      message: '用户名不存在'
    })
  }
  const isPasswordValid = require('bcryptjs').compareSync(
    req.body.password,
    user.password
  )
  if(!isPasswordValid){
    return res.status(422).send(
      {
        message: '密码无效'
      }
    )
  }
  const jwt = require('jsonwebtoken')
  const token = jwt.sign({
    id: String(user.username),
  },'asfuhgiasfhaefoawhfiouas')

  res.send({
    user,
    token
  })
})

// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", ' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });


app.listen(3000, () => {
  console.log('server is running at 127.0.0.1:3000')
})