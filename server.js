const express = require('express')
const _ = require('lodash')
const app = express()


app.get("/holiday", (req, res) => {
  setTimeout(() => {
    const words = ["hohohohoho", "tinsle", "jingle bells", "stockings", "turkey", "chistmas", "snow", "present", "egg nog late", "cookies"]
    res.send(_.sample(words))
  }, 2000)
})
app.use(express.static("public"))

app.listen(8080, () => console.log("listening on port 8080"))