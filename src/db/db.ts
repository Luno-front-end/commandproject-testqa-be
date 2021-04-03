import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const uriDb = process.env.URI_DB

const db = mongoose.connect(uriDb, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

mongoose.connection.on('connected', () =>
    console.log('Database connection successful'),
)
mongoose.connection.on('error', err => console.log(`${err.message}`))
mongoose.connection.on('disconnected', () => console.log('disconnect'))

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    console.log('Connection for db closed and app termination')
    process.exit(1)
})

export default db