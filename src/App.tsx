import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./store/store";
import SearchInput from "./components/SearchInput";
import { loadWeatherDataAsync } from "./store/weatherData/actions";
import { Languages } from "./store/types";
import cities from "./cityCords";
import { setLanguage } from "./store/settings/actions";
import DayCard from "./components/card";

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: AppState) => state.weatherData);
  const selectedLanguage = useSelector(
    (state: AppState) => state.settings.language
  );
  const isLoading = useSelector((state: AppState) => state.settings.isLoading);
  interface City {
    name: string;
    lat: number;
    lng: number;
  }
  interface Language { language: "string", code: Languages }
  const handleCityChange = (_: any, value: City | null) => {
    value &&
      dispatch(
        loadWeatherDataAsync.request({
          lat: value.lat,
          lon: value.lng,
          dt: Math.floor(Date.now() / 1000),
          units: "metric",
          lang: selectedLanguage,
        })
      );
  };
  const handleLanguageChange = (_: any, value: Language | null) => {
    value && dispatch(setLanguage(value.code));
  };
  const languageOptions = Object.entries(Languages).map((arr) => ({
    language: arr[0],
    code: arr[1],
  }));

  return (
    <div className="App">
      <div
        style={{
          marginTop: "2%",
          marginBottom: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginRight: "40px" }}>
          <SearchInput
            handleChange={handleLanguageChange}
            optionLabel="language"
            options={languageOptions}
            searchLabel="Select a language (default English)"
            default={{ language: "English", code: "en" }}
            disabled={isLoading}
          />
        </div>
        <div style={{ marginRight: "40px" }}>
          <SearchInput
            handleChange={handleCityChange}
            optionLabel="name"
            options={cities}
            disabled={isLoading}
            searchLabel="Search by city name"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "1%",
          marginBottom: "auto",
        }}
      >
        {(isLoading && <h2>Loading...</h2>) ||
          weatherData.map((item, i) => {
            return (
              <DayCard
                key={i}
                date={item.dt}
                temperature={item.temp}
                description={item.weather[0].description}
                icon = {item.weather[0].icon}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
