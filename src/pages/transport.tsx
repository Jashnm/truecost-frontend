import { FormEvent, useState } from "react";
import BaseLayout from "../components/core/layouts/BaseLayout";
import { ExtendedNextPage } from "../types/next";
import Select, { createFilter } from "react-select";
import EmissionCard from "../components/EmissionCard";
import { apiCall } from "../lib/axios";
import { IAirport } from "../types/types";
import Spinner from "../components/core/Spinner";

const fuel = [
  { label: "Electric", value: "electric" },
  { label: "Diesel", value: "diesel" },
  { label: "Petrol", value: "petrol" },
  { label: "CNG", value: "cng" }
];
const vehicle = [
  { label: "Bus", value: "bus" },
  { label: "Train", value: "train" },
  { label: "Auto", value: "auto" }
];

const TransportPage: ExtendedNextPage = () => {
  const [fuelType, setFuelType] = useState<any | null>(fuel[0]);
  const [vehicleType, setVehicleType] = useState<any | null>(vehicle[0]);

  const [kms, setKms] = useState<number | undefined>(undefined);
  const [tickets, setTickets] = useState<number | undefined>(undefined);
  const [emission, setEmission] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { data } = await apiCall("transport", {
        typeOfFuel: fuelType.value,
        typeOfVehicle: vehicleType.value,
        noOfKms: kms,
        tickets
      });
      setEmission(data.emission);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="flex justify-center items-center w-full h-60 bg-primary-400">
        <h1 className="text-center text-white text-xl sm:text-3xl tracking-wide font-semibold">
          Carbon Emission from your Transport
        </h1>
      </div>

      <div className="mt-16 w-full">
        <form onSubmit={handleSubmit}>
          <div className="flex w-full flex-col sm:space-y-0 sm:flex-row mt-6 items-center justify-center space-y-6 sm:space-x-8">
            <Select
              defaultValue={fuelType}
              className="max-w-sm w-full"
              isSearchable={false}
              onChange={setFuelType}
              //@ts-ignore
              options={fuel}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: "#d0c6fe",
                  primary: "#65398a"
                }
              })}
            />
            <Select
              defaultValue={vehicleType}
              className="max-w-sm w-full"
              isSearchable={false}
              onChange={setVehicleType}
              //@ts-ignore
              options={vehicle}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: "#d0c6fe",
                  primary: "#65398a"
                }
              })}
            />
          </div>

          <div className="w-full flex-col sm:flex-row mt-6 sm:mt-8 flex space-y-8 sm:space-y-0 sm:space-x-8 justify-center items-center mx-auto">
            <input
              value={kms}
              onChange={(e) => setKms(+e.target.value)}
              type="number"
              placeholder="Number of KMs"
              className="py-[6px] px-2 max-w-sm w-full outline-none border border-[#cccccc] rounded"
            />
            <input
              value={tickets}
              onChange={(e) => setTickets(+e.target.value)}
              type="number"
              placeholder="Number of tickets"
              className="py-[6px] px-2 max-w-sm w-full outline-none border border-[#cccccc] rounded"
            />
          </div>
          <div className="max-w-[50rem] mx-3 sm:mx-auto">
            <button
              disabled={loading}
              className="w-full mt-8 rounded-lg bg-primary-200 text-white font-semibold text-lg py-2.5"
            >
              {loading ? <Spinner /> : "Calculate"}
            </button>
          </div>
        </form>
      </div>
      {!!emission && <EmissionCard emission={emission} type="transport" />}
    </div>
  );
};
TransportPage.Layout = BaseLayout;

export default TransportPage;
