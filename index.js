const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.json({
    ok: true
  })
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})