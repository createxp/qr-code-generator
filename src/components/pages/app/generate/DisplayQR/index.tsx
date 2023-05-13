import React, { useCallback, useRef, useState } from "react";
import { useGenerateQR } from "../../../../../contexts";
import { FiDownload, FiLoader, FiSave, FiX } from "react-icons/fi";
import { Button, Modal } from "../../../../utility";
import { toPng } from "html-to-image";
import validator from "validator";
import toast from "react-hot-toast";
import { QRCode } from "../../../../app";

const DisplayQR = () => {
  const {
    title,
    url,
    bgColor,
    fgColor,
    qrSize,
    includeImage,
    imageURL,
    showTitle,
    titlePosition,
  } = useGenerateQR();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [downloading, setDownloading] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  const saveImg = useCallback(() => {
    setDownloading(true);
    if (ref.current === null) {
      setDownloading(false);
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = title || "qr-code.png";
        link.href = dataUrl;
        link.click();
        setDownloading(false);
      })
      .catch((err) => {
        toast.error("Image URL protected, use another!");
        console.log(err);
        setDownloading(false);
      });
  }, [ref]);

  return (
    <div className="p-1 md:w-1/2 flex items-start md:items-center justify-center md:justify-end">
      <div className="flex flex-col items-center gap-3">
        <p className="text-2xl font-medium text-neutral-500">Quick View</p>
        <div
          className="bg-white rounded-lg w-[340px] min-h-[360px] p-3 flex justify-center items-center border relative"
          style={{ backgroundColor: bgColor }}
        >
          <QRCode
            id="capture"
            reference={ref}
            bgColor={bgColor}
            fgColor={fgColor}
            url={url}
            qrSize={qrSize}
            includeImage={includeImage}
            imageURL={imageURL}
            showTitle={showTitle}
            title={title}
            titlePosition={titlePosition}
          />
        </div>
        {validator.isURL(url) && (
          <Button
            icon={<FiDownload size={"16px"} />}
            onClick={() => setIsOpen(true)}
            text={"Download"}
            rounded={true}
            className="px-4"
            disabled={downloading}
          />
        )}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Download QR Code"
      >
        <div className="flex flex-col gap-4">
          <p className="text-neutral-600">
            This action will download the QR Code as an image.
            <br />
            To track the scans/view of your QR Code you have to save it to your
            account.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Button
              icon={
                !downloading ? (
                  <FiDownload size={"16px"} />
                ) : (
                  <FiLoader size={"16px"} className="animate-spin" />
                )
              }
              onClick={saveImg}
              text={downloading ? "Downloading..." : "Just Download QR Code"}
              className="px-4"
              disabled={downloading}
            />
            <Button
              text="I want to track scans/views"
              variant="outline"
              onClick={() => setIsOpen(false)}
              disabled={downloading}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DisplayQR;
