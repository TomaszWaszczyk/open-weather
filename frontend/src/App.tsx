import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [citiesData, setCitiesData] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (inputValue) {
        try {
          const response = await fetch(
            `http://localhost:3000/openweathermap?city=${inputValue}`
          );
          const data = await response.json();
          setCitiesData(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      } else {
        //clear the cities
        setCitiesData([]);
      }
    };

    fetchWeatherData();
  }, [inputValue]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type city name"
        />
        <ul>
          {citiesData.map((city, index) => (
            <li className="filteredCities" key={index}>{city}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
