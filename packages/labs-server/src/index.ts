import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config() // Read the .env file in the current working directory, and load values into process.env.
const PORT = process.env.PORT || 3000
const staticDir = path.resolve(process.env.STATIC_DIR || 'public') // Ensure an absolute path


const app = express()

app.use(express.static(staticDir))

app.get('/hello', (req: Request, res: Response) => {
	res.send('Hello, World')
})

app.get('*', (req: Request, res: Response) => {
	console.log('none of the routes above me were matched')
	res.sendFile(path.join(staticDir, 'index.html'), (err) => {
		if (err) {
			console.error('Error sending index.html:', err)
			res.status(500).send('Internal Server Error')
		}
	})
})

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`)
})
