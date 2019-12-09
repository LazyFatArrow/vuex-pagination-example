const express = require('express')
const cors = require('cors')

const data = require('./data.json')

const app = express()

app.use(cors())

app.get('/api/v1/employees', (req, res) => {
  const page = parseInt(req.query.page) - 1 || 0
  const limit = parseInt(req.query.limit) || 10

  res.json({
    data: data.slice(page * limit, (page + 1) * limit),
    totalPages: Math.round(data.length / limit),
    page: page + 1,
    limit,
  })
})

app.listen(3000, () => console.log('app started on port 3000'))