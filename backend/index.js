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

app.get('/openweathermap', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Could not read file' });
      return;
    }

    const cityList = JSON.parse(data).list;
    const firstLetter = req.body.city.toLowerCase();

    const filteredList = cityList.filter((city) => 
      city.name.toLowerCase().startsWith(firstLetter)
    );

    const cities = filteredList.map((city) => city.name);

    res.setHeader('Content-Type', 'application/json');
    res.send(cities);
  });
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
