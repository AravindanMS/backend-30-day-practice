const express = require("express");
const app =express();
app.use(express.json());

const users = [
  {id: 1, name: "Ram", email: "ram@gmail.com", role:"admin"},
  {id:2, name:"Lakshman", email:"laksh@gmail.com", role:"user"}
]

app.get("/health",(req,res)=>{
  return res.status(200).json({
    status:"Ok",
    message:"Server is running"
  })
})

app.get("/users",(req,res)=>{
  return res.status(200).json(users)
})

const PORT = 3000;

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
})
