import React from "react";

const EmissionCard: React.FC<{ emission: number; type: string }> = ({
  emission,
  type
}) => {
  return (
    <div className="flex flex-col mt-8 space-y-8 max-w-4xl mx-auto items-center justify-around">
      <p className="text-3xl text-center font-semibold tracking-wide">
        Hey, total carbon emission from your {type} is :
      </p>
      <p className="text-5xl bg-primary-100 bg-opacity-75 flex justify-center items-center border w-44 h-44 rounded-full  font-bold tracking-wide">
        {emission} <span className="text-sm mt-6">kg</span>
      </p>
    </div>
  );
};

export default EmissionCard;
