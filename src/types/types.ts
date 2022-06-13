export interface IAirport {
  "S.No": number;
  Name: string;
  City: string;
  Country: string;
  IATA: string;
  ICAO: string;
  lat: number;
  lng: number;
  alt: number;
  timezone: number;
  dst: string;
  tzdb: string;
  type: string;
  source: string;
}
