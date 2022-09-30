export interface QRCodeProps {
    id?: string;
    reference?: React.ForwardedRef<HTMLDivElement>;
    bgColor: string;
    fgColor: string;
    url: string;
    qrSize: number;
    includeImage: boolean;
    imageURL?: string;
    showTitle: boolean;
    title: string;
    titlePosition: string;
    titleSize?: string;
}