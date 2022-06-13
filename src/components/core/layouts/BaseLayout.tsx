import { ReactNode } from "react";
import Header from "../Header";

const BaseLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen antialiased bg-white">
      <Header />

      <div className="flex flex-col w-full mt-16">{children}</div>
    </div>
  );
};

export default BaseLayout;
