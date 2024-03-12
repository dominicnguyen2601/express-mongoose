const express = require("express")
const app = express()

//routes

app.get('/', (req, res) => {
  res.send("Hello client , I am from server")
})

app.listen(3000, () => {
  console.log("Node App is running on 3000")
})