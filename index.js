import express from "express"

const app = express()
const PORT = 3003

const items = []


app.use(express.json())

app.get("/getItems", function(req, res) {
    res.send(items)
})

app.post("/addNewItems", function(req, res) {
    const item = req.body
    items.push(item)

    res.send("item recieved")
})

app.listen(PORT, function() {
    console.log("up and running on port " + PORT);
})