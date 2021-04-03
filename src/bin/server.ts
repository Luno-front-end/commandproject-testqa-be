import app from '../app'
import db from '../db/db'

const PORT = process.env.PORT

// Connect to Database
// ======================================
db.then(() => {
    app.listen(PORT,  () => {
        console.log(`Server running. Use our API on port: ${PORT}`)
    })
}).catch(e  => {
    console.log(`Server not running. Error message: ${e.message}`)
    process.exit(1)
})
