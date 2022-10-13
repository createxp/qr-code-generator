import type { NextPage } from "next";
import { Button } from "../src/components/utility";
import { publicRoute } from "../src/routes";
import { AiOutlineQrcode } from "react-icons/ai";
import { useRouter } from "next/router";
import { Faq, Features, Footer, Hero } from "../src/components/pages";
import Spacer from "../src/components/utility/spacer";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="md:max-w-7xl mx-auto">
      {/* <h1 className="font-bold text-4xl text-center">
        QR Code Generator
      </h1>
      <Button
        text={'Go to App'}
        icon={<AiOutlineQrcode />}
        onClick={() => router.push('/app')}
      /> */}
      <Hero />
      <Spacer />
      <Features />
      <Spacer />
      <Faq />
      <Spacer />
      <Footer />
      <Spacer />
    </div>
  );
};

export default publicRoute(Home);
