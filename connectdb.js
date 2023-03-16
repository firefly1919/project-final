const mongoose = require('mongoose')
const connectdb = () => {
    try {
        mongoose.connect("mongodb+srv://derouichwissem033:wiss1919@cluster0.bif2ar1.mongodb.net/?retryWrites=true&w=majority")
        console.log("db is connected")
    } catch (error) {
        console.log('db is not connected')
    }
}
module.exports = connectdb