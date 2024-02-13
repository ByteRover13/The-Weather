import express from "express"
import  { handler}  from "./build/handler.js"

const app = express()
const port = 3000;

// Demo Route 
app.get("/expressroute", (req, res) =>{
    res.send("This is an express Router ");
});

// this  will  connect your svelte kit  appt to your express
app.use(handler)

app.listen(port, () => {
    console.log(`Server is : ${port}`)
})