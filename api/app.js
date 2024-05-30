import express from "express";

const app = express();

console.log("test1")

const PORT = 8800;

app.use("/api/test" , (req , res) =>{
    res.send("test")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
