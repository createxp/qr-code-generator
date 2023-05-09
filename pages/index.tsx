import type { NextPage } from "next";
import { publicRoute } from "../src/routes";
import { Faq, Features, Hero } from "../src/components/pages";
import Spacer from "../src/components/utility/spacer";
import CTA from "../src/components/app/CTA";

const Home: NextPage = () => {
  return (
    <div className="">
      <Hero />
      <Features />
      <Spacer />
      <Faq />
      <Spacer />
      <CTA />
    </div>
  );
};

export default publicRoute(Home);
