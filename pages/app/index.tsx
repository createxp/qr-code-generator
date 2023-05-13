import React from "react";
import { Screen } from "../../src/components/app";
import { Generate, Saved } from "../../src/components/pages/app";
import { GenerateQRProvider, useScreen } from "../../src/contexts";
import { privateRoute } from "../../src/routes";
import Head from "next/head";
import { Spacer } from "../../src/components/utility";

const App = () => {
  const { selectedTab } = useScreen();
  return (
    <Screen className="w-full min-h-screen bg-neutral-100">
      <Head>
        <title>QR Code Generater by createxp</title>
      </Head>
      {/* Create Page */}
      {selectedTab === 0 && <Saved />}
      {/* Saved Page */}
      {selectedTab === 1 && (
        <GenerateQRProvider>
          <Generate />
        </GenerateQRProvider>
      )}
      <Spacer height="4rem" />
      <div className="flex flex-col justify-center items-center">
        a project by
        <a
          href="https://createxp.in/"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-50 underline"
        >
          <img src="/logo.png" alt="createxp" width={"128px"} />
        </a>
      </div>
    </Screen>
  );
};

export default privateRoute(App);
