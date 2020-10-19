export type Units = "standard" | "metric" | "imperial";

export interface RequestPayload {
  lat: number;
  lon: number;
  dt: number;
  units?: Units;
  lang?: Languages;
}

const sampleResponse = {
  "lat": 35.69,
  "lon": 139.75,
  "timezone": "Asia/Tokyo",
  "timezone_offset": 32400,
  "current": {
    "dt": 1602763102,
    "sunrise": 1602708433,
    "sunset": 1602749160,
    "temp": 15.86,
    "feels_like": 13.03,
    "pressure": 1007,
    "humidity": 87,
    "dew_point": 13.7,
    "uvi": 5.97,
    "clouds": 75,
    "visibility": 10000,
    "wind_speed": 5.7,
    "wind_deg": 50,
    "weather": [
      { "id": 500, "main": "Rain", "description": "مطر خفيف", "icon": "10n" }
    ],
    "rain": { "1h": 0.5 }
  }
}

export type APIResponse = typeof sampleResponse
export type dayWeatherData = typeof sampleResponse.current

export enum Languages {
  Afrikaans = "af",
  Albanian = "al",
  Arabic = "ar",
  Azerbaijani = "az",
  Bulgarian = "bg",
  Catalan = "ca",
  Czech = "cz",
  Danish = "da",
  German = "de",
  Greek = "el",
  English = "en",
  Basque = "eu",
  Persian = "fa",
  Finnish = "fi",
  French = "fr",
  Galician = "gl",
  Hebrew = "he",
  Hindi = "hi",
  Croatian = "hr",
  Hungarian = "hu",
  Indonesian = "id",
  Italian = "it",
  Japanese = "ja",
  Korean = "kr",
  Latvian = "la",
  Lithuanian = "lt",
  Macedonian = "mk",
  Norwegian = "no",
  Dutch = "nl",
  Polish = "pl",
  Portuguese = "pt",
  Português_Brasil = "pt_br",
  Romanian = "ro",
  Russian = "ru",
  Swedish = "sv, se",
  Slovak = "sk",
  Slovenian = "sl",
  Spanish = "sp, es",
  Serbian = "sr",
  Thai = "th",
  Turkish = "tr",
  Ukrainian = "ua, uk",
  Vietnamese = "vi",
  Chinese_Simplified = "zh_cn",
  Chinese_Traditional = "zh_tw",
  Zulu = "zu",
}
