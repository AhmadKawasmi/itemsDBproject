const express = require("express")
const router = express.Router()
const Item = require("../models/item.model")


router.get("/getItems", async function(req, res) {
    const items = await Item.find({})
    res.send(items)
})

router.post("/addNewItems", async function(req, res) {
    const item = new Item(req.body)
    const response = await item.save()
    res.send(response)
})

module.exports = router