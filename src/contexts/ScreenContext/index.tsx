import { createContext, useContext, useState } from "react";

interface ScreenContextProps {
    selectedTab: number;
    setSelectedTab: (selectedTab: number) => void;
}

export const ScreenContext = createContext<ScreenContextProps>({} as ScreenContextProps);

interface ScreenProviderProps {
    children: React.ReactNode;
}

export const ScreenProvider = (props: ScreenProviderProps) => {
    const [selectedTab, setSelectedTab] = useState<number>(0)
    return (
        <ScreenContext.Provider value={{
            selectedTab,
            setSelectedTab
        }}>
            {props.children}
        </ScreenContext.Provider>
    )
}

const useScreen = () => useContext<ScreenContextProps>(ScreenContext)

export default useScreen