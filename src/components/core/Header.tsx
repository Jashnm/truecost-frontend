import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <header className="absolute top-0 z-20 w-full py-1 bg-primary-50 px-5">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-14">
        <h2 className="text-lg font-medium">Truecost</h2>

        <div className="items-center md:flex text-primary-700">
          <a
            href="/truecost/flights"
            className={`mr-6 ${
              pathname === "/flights" && "border-b border-b-primary-200"
            }`}
          >
            Flights
          </a>

          <a
            href="/truecost/commute"
            className={`mr-6 ${
              pathname === "/commute" && "border-b border-b-primary-200"
            }`}
          >
            Commute
          </a>
          <a
            href="/truecost/transport"
            className={`mr-6 ${
              pathname === "/transport" && "border-b border-b-primary-200"
            }`}
          >
            Transport
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
