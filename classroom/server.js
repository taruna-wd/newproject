const express = require("express");
const app = express();



main()
   .then(() => {
      console.log("connect to db")
   }).catch(err => console.log(err));
async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/pizza') // pizza is name of data base in mongo db

}

app.get("/",(req,res)=>{
  res.send(" hi hello ")
})
app.get("/getcookies" , (req,res)=>{
   res.cookie("made in " , " indias")
   res.cookie(" great" , "hello")
   res.send("send some cookies")
})


app.listen(8080, () => {
    console.log("connection bn chuka h")
 });

 module.exports = app