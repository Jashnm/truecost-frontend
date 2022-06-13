import axios from "axios";

const baseURL = process.env.BASE_API_URL || "http://localhost:8080";

const instance = axios.create({ baseURL });

export const apiCall = (type: string, data: any) => {
  const key =
    type === "flights"
      ? process.env.NEXT_PUBLIC_FLIGHTS_KEY
      : type === "commute"
      ? process.env.NEXT_PUBLIC_COMMUTE_KEY
      : process.env.NEXT_PUBLIC_TRANSPORT_KEY;

  return instance.post(`/partner/truecost/${type.toLowerCase()}`, data, {
    headers: {
      authorization: Buffer.from(key!).toString("base64")
    }
  });
};
