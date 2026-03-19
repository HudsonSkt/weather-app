import { useState } from "react";
import { getWeather } from "./Services/api";
import { GlobalStyle } from "./styles/global";
import { SearchBar } from "./Components/SearchBar";
import type { WeatherData } from "./Types/weather";
import { WeatherCard } from "./Components/WeatherCard";
import { AppContainer } from "./styles/AppContainer";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError("");

    try {
      const data = await getWeather(city);
      setWeather(data);

      console.log(data);
    } catch {
      console.error("erro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <SearchBar city={city} onChange={setCity} onSearch={handleSearch} />
        {loading && <p style={{ color: "white" }}>Carregando...</p>}
        {error && <p style={{ color: "#ff6b6b" }}>{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </AppContainer>
    </>
  );
}

export default App;
