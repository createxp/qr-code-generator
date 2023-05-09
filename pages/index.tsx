import type { NextPage } from "next";
import { publicRoute } from "../src/routes";
import { FAQs, Cards, Hero, CTA } from "../src/components/pages/home";
import { Spacer } from "../src/components/utility";


const Home: NextPage = () => {
  return (
    <div className="">
      <Hero />
      <Cards />
      <Spacer />
      <FAQs />
      <Spacer />
      <CTA />
    </div>
  );
};

export default publicRoute(Home);
