const axios = require('axios')
require('dotenv').config()

const url = 'https://api.yelp.com/v3/businesses/search?term=deli&longitude=-98.491142&latitude=29.424349'

const token = process.env.YELP_TOKEN

const config = {
  headers: {
    'Authorization': token
  }
}
const getYelp = async () => {
  let res = await axios.get(url, config)
  console.log(res.data.businesses);
}
getYelp()