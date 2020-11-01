import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../src/App'
import Rocket from '../src/Rocket'
const fetch   = require('node-fetch');



const PORT = 8000
const app = express()

const router = express.Router()

const serverRenderer = () => {
  app.get('/data', function (req, res) {
    var url = 'https://api.spaceXdata.com/v3/launches?limit=100';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        res.send(
          data
      )
    })
    .catch(err => {
        res.send(err);
    });
  })
}
router.use('^/$', serverRenderer)

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

// tell the app to use the above rules
app.use(router)

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})



    // data.map(el=>{
        //   return (
        //       `<div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 text-left rock-card">
        //           <img className="rock-img" src=${el.links.mission_patch}></img>
        //           <p ><strong>Misson ID:</strong><span>${el.mission_id}</span></p>
        //           <p ><strong>Launch year:</strong> <span>${el.launch_year}</span></p>
        //           <p><strong>Launch success:</strong> <span>${el.launch_success.toString()}</span></p>
        //           <p><strong>Landing success:</strong> <span>${el.launch_success.toString()}</span></p>
        //       </div>`
        //   )
        // })