const PORT = process.env.PORT || 8000
const dbURI = process.envMONGODB_URI || 'mongodb://localhost:27017/artist-resume'

module.exports = {PORT, dbURI}