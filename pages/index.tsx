import type { NextPage } from "next";
import { publicRoute } from "../src/routes";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center">
        Hello QR Code
      </h1>

    </div>
  );
};

export default publicRoute(Home);