import express from 'express';
import recipesRouter from './routes/recipesRouter.js'


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use('/recipes', recipesRouter)

app.use('/', (req, res) => res.send('Hello'));


app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));