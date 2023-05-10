import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FiAlignCenter,
  FiAlignLeft,
  FiAlignRight,
  FiLoader,
  FiSave,
} from "react-icons/fi";
import { useAuth, useGenerateQR } from "../../../../../contexts";
import { db } from "../../../../../firebase";
import { Button, Input, Select, Switch } from "../../../../utility";

const NewQRForm = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
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
    setTitle,
    setUrl,
    setBgColor,
    setFgColor,
    setQrSize,
    setincludeImage,
    setImageURL,
    setShowTitle,
    setTitlePosition,
  } = useGenerateQR();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    addDoc(collection(db, `users/${user?.uid}/qrcodes`), {
      title,
      url,
      bgColor,
      fgColor,
      qrSize,
      includeImage,
      ...(includeImage && { imageURL }),
      showTitle,
      titlePosition,
      views: 0,
      createdAt: serverTimestamp(),
      editedAt: serverTimestamp(),
    })
      .then(() => {
        toast.success("QR Code Added");
        setTitle("");
        setUrl("");
        setBgColor("#ffffff");
        setFgColor("#000000");
        setQrSize(256);
        setincludeImage(false);
        setImageURL("");
        setShowTitle(true);
        setTitlePosition("left");
        setLoading(false);
        router.push("/app?tab=saved");
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <form
      className="w-full md:w-1/2 flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Enter the title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        name="title"
        label="QR Code Title"
        max={20}
      />
      <div className="flex gap-4">
        <Switch
          id="showTitle"
          name="showTitle"
          label="Show Title on QR"
          state={showTitle}
          onChange={() => setShowTitle(!showTitle)}
          wrapperClassName="w-fit"
        />

        <Select
          id="titlePosition"
          name="titlePosition"
          label="Title Position"
          options={[
            { value: "left", label: <FiAlignLeft /> },
            { value: "center", label: <FiAlignCenter /> },
            { value: "right", label: <FiAlignRight /> },
          ]}
          value={titlePosition}
          onChange={(value: string) => setTitlePosition(value)}
          disabled={!showTitle}
        />
      </div>
      <Input
        type="url"
        placeholder="Enter the url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        id="url"
        name="url"
        label="QR Code URL"
      />
      <div className="flex gap-2">
        <Input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          id="color"
          name="color"
          label="BG Color"
          fit={true}
        />
        <Input
          type="color"
          value={fgColor}
          onChange={(e) => setFgColor(e.target.value)}
          id="color"
          name="color"
          label="FG Color"
          fit={true}
        />
      </div>
      <Input
        inputClassName="p-0"
        type="range"
        value={qrSize}
        onChange={(e) => setQrSize(Number(e.target.value))}
        id="qrSize"
        name="qrSize"
        label="QR Code Size"
        min={100}
        max={280}
        step={1}
      />

      <Switch
        id="includeImage"
        name="includeImage"
        label="Include Image"
        state={includeImage}
        onChange={() => setincludeImage(!includeImage)}
      />

      {includeImage && (
        <Input
          type="url"
          placeholder="Enter the image url"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          id="imageURL"
          name="imageURL"
          label="Image URL"
        />
      )}
      <Button
        icon={
          !loading ? (
            <FiSave size={"16px"} />
          ) : (
            <FiLoader size={"16px"} className="animate-spin" />
          )
        }
        type="submit"
        text={
          loading
            ? "Saving"
            : includeImage
            ? "Save QR Code with Image to Track"
            : "Save QR Code to Track"
        }
        wFull={true}
        onSubmit={handleSubmit}
        disabled={loading}
      />
    </form>
  );
};

export default NewQRForm;
