'use strict'

const express = require('express')
const app = express()

//config
require('dotenv').config()
const PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV || 'development'

//mount routes
const {routes} = require('./routes/')
app.use(routes)

app.listen(PORT, function() {
	console.log(`listening on port ${PORT}`)
})

