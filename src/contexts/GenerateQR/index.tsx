import { createContext, useContext, useState } from "react";

interface GenerateQRContextProps {
    title: string;
    setTitle: (title: string) => void;
    url: string;
    setUrl: (url: string) => void;
    bgColor: string;
    setBgColor: (bgColor: string) => void;
    fgColor: string;
    setFgColor: (fgColor: string) => void;
    enableMargin: boolean;
    setEnableMargin: (enableMargin: boolean) => void;
    includeImage: boolean;
    setincludeImage: (includeImage: boolean) => void;
    imageURL: string;
    setImageURL: (imageURL: string) => void;
    qrSize: number;
    setQrSize: (qrSize: number) => void;
}

interface GenerateQRProviderProps {
    children: React.ReactNode;
}

export const GenerateQRContext = createContext<GenerateQRContextProps>({} as GenerateQRContextProps);

export const GenerateQRProvider = (props: GenerateQRProviderProps) => {
    const [title, setTitle] = useState<string>('')
    const [url, setUrl] = useState<string>('')
    const [bgColor, setBgColor] = useState<string>('#000000')
    const [fgColor, setFgColor] = useState<string>('#ffffff')
    const [enableMargin, setEnableMargin] = useState<boolean>(false)
    const [includeImage, setincludeImage] = useState<boolean>(false)
    const [imageURL, setImageURL] = useState<string>('')
    const [qrSize, setQrSize] = useState<number>(256)
    return (
        <GenerateQRContext.Provider value={{
            title,
            setTitle,
            url,
            setUrl,
            bgColor,
            setBgColor,
            fgColor,
            setFgColor,
            enableMargin,
            setEnableMargin,
            includeImage,
            setincludeImage,
            imageURL,
            setImageURL,
            qrSize,
            setQrSize
        }}>
            {props.children}
        </GenerateQRContext.Provider>
    )
}

const useGenerateQR = () => useContext<GenerateQRContextProps>(GenerateQRContext);

export default useGenerateQR;