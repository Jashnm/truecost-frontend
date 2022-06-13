import { FormEvent, useState } from "react";
import BaseLayout from "../components/core/layouts/BaseLayout";
import { ExtendedNextPage } from "../types/next";
import airports from "../../airports.json";
import Select, { createFilter } from "react-select";
import CustomList from "../components/CustomList";
import { apiCall } from "../lib/axios";
import { IAirport } from "../types/types";
import Spinner from "../components/core/Spinner";
import EmissionCard from "../components/EmissionCard";

const FlightsPage: ExtendedNextPage = () => {
  const [from, setFrom] = useState<IAirport | null>(airports[0]);
  const [to, setTo] = useState<IAirport | null>(airports[0]);
  const typeOptions = [
    { label: "Return", value: "return" },
    { label: "One Way", value: "one-way" }
  ];
  const [type, setType] = useState<null | any>(typeOptions[0]);
  const [noOfTickets, setNoOfTickets] = useState<number | undefined>(undefined);
  const [emission, setEmission] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();
    try {
      console.log({ to, from });
      const { data } = await apiCall("flights", {
        to: to?.IATA,
        from: from.IATA,
        type: type.value,
        noOfTickets
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
          Carbon Emission from your Flights
        </h1>
      </div>

      <div className="mt-16 w-full">
        <form onSubmit={handleSubmit}>
          <div className="flex w-full flex-col sm:flex-row sm:space-y-0 space-y-6 items-center justify-center sm:space-x-8">
            <Select
              defaultValue={from}
              className="max-w-sm w-full"
              filterOption={createFilter({ ignoreAccents: false })}
              onChange={(newValue) => setFrom(newValue)}
              //@ts-ignore
              options={airports.filter((x) => !(x["S.No"] % 2 === 0))}
              //@ts-ignore
              getOptionValue={(option) => option["IATA"]}
              getOptionLabel={(option) =>
                //@ts-ignore
                `${option["IATA"]} | ${option["Name"]}, ${option["Country"]}`
              }
              components={{ MenuList: CustomList }}
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
              defaultValue={to}
              className="max-w-sm w-full"
              filterOption={createFilter({ ignoreAccents: false })}
              onChange={(newValue) => setTo(newValue)}
              //@ts-ignore
              options={airports.filter((x) => !(x["S.No"] % 2 === 0))}
              //@ts-ignore
              getOptionValue={(option) => option["IATA"]}
              getOptionLabel={(option) =>
                //@ts-ignore
                `${option["IATA"]} | ${option["Name"]}, ${option["Country"]}`
              }
              components={{ MenuList: CustomList }}
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
          <div className="flex w-full flex-col sm:flex-row sm:space-y-0 space-y-6 mt-6 items-center justify-center sm:space-x-8">
            <Select
              defaultValue={type}
              className="max-w-sm w-full"
              isSearchable={false}
              onChange={setType}
              //@ts-ignore
              options={typeOptions}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: "#d0c6fe",
                  primary: "#65398a"
                }
              })}
            />
            <input
              value={noOfTickets}
              onChange={(e) => setNoOfTickets(+e.target.value)}
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
      {!!emission && <EmissionCard emission={emission} type="flights" />}
    </div>
  );
};
FlightsPage.Layout = BaseLayout;

export default FlightsPage;
