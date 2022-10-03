import type { NextPage } from "next";
import { Button } from "../src/components/utility";
import { publicRoute } from "../src/routes";
import { AiOutlineQrcode } from 'react-icons/ai'
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 w-full h-screen justify-center items-center">
      <h1 className="font-bold text-4xl text-center">
        QR Code Generator
      </h1>
      <Button
        text={'Go to App'}
        icon={<AiOutlineQrcode />}
        onClick={() => router.push('/app')}
      />
    </div>
  );
};

export default publicRoute(Home);