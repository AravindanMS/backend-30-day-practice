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

app.get("/users/:id",(req,res)=>{
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if(!user){
    return res.status(404).json({
      message:"User not found"
    })
  }
  return res.status(200).json(user);
})

app.post("/users",(req,res)=>{
  const {name,email,role} = req.body;

  if(!name || !email || !role){
    return res.status(400).json({
      message:"Name,Email,Role is required"
    })
  }
  const newUser = {
    id:users.length + 1,
    name,
    email,
    role
  }

  users.push(newUser);

  return res.status(201).json(newUser)
})

const PORT = 3000;

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
})
