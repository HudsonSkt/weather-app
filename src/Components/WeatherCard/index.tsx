import type { WeatherData } from "../../Types/weather";

import { Container, CityName, Temp, Description, InfoRow } from "./styles";

interface Props {
  weather: WeatherData;
}
export const WeatherCard = ({ weather }: Props) => {
  return (
    <Container>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <Temp>{Math.round(weather.main.temp)}°C</Temp>
      <CityName>
        {weather.name} | {weather.sys.country}
      </CityName>
      <Description>{weather.weather[0].description}</Description>
      <InfoRow>Sensação: {Math.round(weather.main.feels_like)}°C</InfoRow>
    </Container>
  );
};
