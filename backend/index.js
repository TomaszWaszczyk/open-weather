import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
const PORT = 3000;
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, './resources/openweathermap.json');
const data = fs.readFileSync(filePath, 'utf8');

app.get('/openweathermap', (req, res) => {

  console.log(req.body);

  const firstLetter = req.body.city;

  console.log('First letter:', firstLetter);
  console.log(data);
  res.setHeader('Content-Type', 'application/json');
  res.send(data);

});

app.post('/city', (req, res) => {
    const { city } = req.body;

    console.log('Received city:', city);

    if (!city) {
        return res.status(400).json({ error: 'City is required' });
    }

    res.json({ message: `City ${city} received` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
