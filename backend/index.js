import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = 3000;


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const filePath = path.join(dirname, './resources/openweathermap.json');

let cityList = [];
try {
  const data = fs.readFileSync(filePath, 'utf8');
  cityList = JSON.parse(data).list;
} catch (err) {
  console.error('Could not read or parse the city data file:', err);
}

app.get('/openweathermap', (req, res) => {
  const prefix = (req.query.city || '').toLowerCase();

  const filtered = cityList.filter(city =>
    city.name.toLowerCase().startsWith(prefix)
  );

  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
