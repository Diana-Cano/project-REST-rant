const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://www.placekitten.com/200/300',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://www.placekitten.com/200/300',
    founded: 2020
}])
.then(() => {
    console.log('success!!!!!!')
    process.exit()
})
.catch(err => {
    console.log('faliure',err)
    process.exit()
})
