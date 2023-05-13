import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

interface ScreenContextProps {
  selectedTab: number;
  setSelectedTab: (selectedTab: number) => void;
}

export const ScreenContext = createContext<ScreenContextProps>(
  {} as ScreenContextProps
);

interface ScreenProviderProps {
  children: React.ReactNode;
}

export const ScreenProvider = (props: ScreenProviderProps) => {
  const router = useRouter();
  const { tab } = router.query;
  useEffect(() => {
    if (tab) {
      if (tab === "generate") {
        setSelectedTab(0);
      }
      if (tab === "saved") {
        setSelectedTab(1);
      }
    } else {
      setSelectedTab(0);
    }
  }, [tab]);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  return (
    <ScreenContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
      }}
    >
      {props.children}
    </ScreenContext.Provider>
  );
};

const useScreen = () => useContext<ScreenContextProps>(ScreenContext);

export default useScreen;
