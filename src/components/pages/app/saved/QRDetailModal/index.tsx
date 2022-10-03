import { toPng } from 'html-to-image'
import React, { useCallback, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { QRCode, VisitLink } from '../../../../app'
import { Button, Input, Loading, Modal, Select, Switch } from '../../../../utility'
import validator from 'validator'
import { FiAlignCenter, FiAlignLeft, FiAlignRight, FiChevronLeft, FiDownload, FiEdit2, FiEye, FiLoader, FiTrash } from 'react-icons/fi'
import { deleteDoc, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../../../../../firebase'
import { useAuth } from '../../../../../contexts'

const QRDetailModal = ({
    id,
    qrCode,
    isOpen,
    onClose,
}: {
    id: string,
    qrCode: {
        bgColor: string,
        fgColor: string,
        url: string,
        includeImage: boolean,
        imageURL: string,
        title: string,
        views: number,
        titlePosition: string,
        showTitle: boolean,
        qrSize: number,
        createdAt: string,
        editedAt: string,
    },
    isOpen: boolean,
    onClose: () => void,
}) => {
    const {
        bgColor,
        fgColor,
        url,
        includeImage,
        imageURL,
        title,
        views,
        titlePosition,
        showTitle,
        qrSize,
        createdAt,
        editedAt
    } = qrCode

    const { user } = useAuth()

    const [loading, setLoading] = useState<boolean>(false)
    const [loadingMsg, setLoadingMsg] = useState<string>('')
    const [downloading, setDownloading] = useState<boolean>(false)

    const [edit, setEdit] = useState<boolean>(false);

    // Form States
    const [editTitle, setEditTitle] = useState<string>(title);
    const [editShowTitle, setEditShowTitle] = useState<boolean>(showTitle);
    const [editTitlePosition, setEditTitlePosition] = useState<string>(titlePosition);
    const [editUrl, setEditUrl] = useState<string>(url);
    const [editBgColor, setEditBgColor] = useState<string>(bgColor);
    const [editFgColor, setEditFgColor] = useState<string>(fgColor);
    const [editQrSize, setEditQrSize] = useState<number>(qrSize);
    const [editIncludeImage, setEditIncludeImage] = useState<boolean>(includeImage);
    const [editImageURL, setEditImageURL] = useState<string>(imageURL);

    const ref = useRef<HTMLDivElement>(null)

    const saveImg = useCallback(() => {
        setDownloading(true)
        if (ref.current === null) {
            setDownloading(false)
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = title || 'qr-code.png'
                link.href = dataUrl
                link.click()
                setDownloading(false)
            })
            .catch((err) => {
                toast.error('Image URL protected, use another!')
                console.log(err)
                setDownloading(false)
            })
    }, [ref])

    // Edit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (!validator.isURL(editUrl)) {
            toast.error("Invalid URL");
            setLoading(false);
            return;
        }
        if (editIncludeImage && !validator.isURL(editImageURL)) {
            toast.error("Invalid Image URL");
            setLoading(false);
            return;
        }
        setDoc(doc(db, `users/${user?.uid}/qrcodes/${id}`),
            {
                bgColor: editBgColor,
                fgColor: editFgColor,
                url: editUrl,
                includeImage: editIncludeImage,
                imageURL: editImageURL,
                title: editTitle,
                titlePosition: editTitlePosition,
                showTitle: editShowTitle,
                qrSize: editQrSize,
                editedAt: serverTimestamp(),
            },
            { merge: true }
        )
            .then(() => {
                toast.success("QR Code Updated");
                setEdit(false);
                setLoading(false);
            })
            .catch((err) => {
                toast.error("Something went wrong");
                setLoading(false);
            });
    };

    const handleDeleteQR = () => {
        setLoading(true)
        setLoadingMsg('Deleting QR Code...')
        setTimeout(() => {
            deleteDoc(doc(db, `users/${user?.uid}/qrcodes/${id}`))
                .then(() => {
                    toast.success('QR Code deleted successfully!')
                    setLoading(false)
                    setLoadingMsg('')
                    onClose()
                })
                .catch((err) => {
                    toast.error('Something went wrong!')
                    setLoading(false)
                    setLoadingMsg('')
                    console.log(err)
                })
        }, 1000)
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => {
                setEdit(false)
                onClose()
            }}
            title='QR Code Details'
        >
            <div className="flex flex-col justify-center items-center md:items-start md:justify-start w-full md:flex-row gap-6 mt-3">
                <div className='rounded-lg w-fit h-fit flex flex-col gap-3 justify-center items-center relative md:sticky md:top-0'>
                    <QRCode
                        id='capture'
                        reference={ref}
                        bgColor={editBgColor}
                        fgColor={editFgColor}
                        url={`https://qr.createxp.in/qr?id=${user?.uid}-${id}`}
                        qrSize={editQrSize}
                        includeImage={editIncludeImage}
                        imageURL={editImageURL}
                        showTitle={editShowTitle}
                        title={editTitle}
                        titlePosition={editTitlePosition}
                        titleSize={'20px'}
                    />
                    {
                        validator.isURL(url) && (
                            <Button
                                icon={
                                    !downloading ?
                                        <FiDownload size={'16px'} />
                                        : <FiLoader size={'16px'} className='animate-spin' />
                                }
                                onClick={saveImg}
                                text={
                                    downloading ? 'Downloading...' : 'Download'
                                }
                                className='px-4'
                                disabled={downloading}
                                wFull
                            />
                        )
                    }
                </div>
                <hr className='w-1/2 md:hidden' />
                {edit ? (
                    <div className="flex flex-col items-center justify-between gap-3 w-full">
                        <div className="flex items-center justify-between w-full">
                            <div
                                className="p-2 rounded-full transition-all bg-neutral-200  hover:bg-neutral-300 active:scale-[0.95] cursor-pointer"
                                onClick={() => {
                                    setEditBgColor(bgColor)
                                    setEditFgColor(fgColor)
                                    setEditUrl(url)
                                    setEditIncludeImage(includeImage)
                                    setEditImageURL(imageURL)
                                    setEditTitle(title)
                                    setEditTitlePosition(titlePosition)
                                    setEditShowTitle(showTitle)
                                    setEditQrSize(qrSize)
                                    setEdit(false)
                                }}
                            >
                                <FiChevronLeft size={16} />
                            </div>
                            <h2>Edit QR Details</h2>
                        </div>
                        <form
                            className="w-full min-w-[300px] flex flex-col gap-4"
                            onSubmit={handleSubmit}
                        >
                            <Input
                                type="text"
                                placeholder="Enter the title"
                                value={editTitle}
                                id="title"
                                name="title"
                                label="QR Code Title"
                                max={20}
                                onChange={(e) => setEditTitle(e.target.value)}
                            />
                            <div className="flex gap-4">
                                <Switch
                                    id="showTitle"
                                    name="showTitle"
                                    label="Show Title on QR"
                                    wrapperClassName="w-fit"
                                    state={editShowTitle}
                                    onChange={() => setEditShowTitle(!editShowTitle)}
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
                                    value={editTitlePosition}
                                    disabled={!editShowTitle}
                                    onChange={(value) => setEditTitlePosition(value)}
                                />
                            </div>
                            <Input
                                type="url"
                                placeholder="Enter the url"
                                value={editUrl}
                                id="url"
                                name="url"
                                label="QR Code URL"
                                onChange={(e) => setEditUrl(e.target.value)}
                            />
                            <div className="flex gap-2">
                                <Input
                                    type="color"
                                    value={editBgColor}
                                    id="color"
                                    name="color"
                                    label="BG Color"
                                    fit={true}
                                    onChange={(e) => setEditBgColor(e.target.value)}
                                />
                                <Input
                                    type="color"
                                    value={editFgColor}
                                    id="color"
                                    name="color"
                                    label="FG Color"
                                    fit={true}
                                    onChange={(e) => setEditFgColor(e.target.value)}
                                />
                            </div>
                            <Input
                                type="range"
                                value={editQrSize}
                                id="qrSize"
                                name="qrSize"
                                label="QR Code Size"
                                min={100}
                                max={280}
                                step={1}
                                onChange={(e) => setEditQrSize(parseInt(e.target.value))}
                            />

                            <Switch
                                id="includeImage"
                                name="includeImage"
                                label="Include Image"
                                wrapperClassName="w-fit"
                                state={editIncludeImage}
                                onChange={() => setEditIncludeImage(!editIncludeImage)}
                            />

                            {editIncludeImage && (
                                <Input
                                    type="url"
                                    placeholder="Enter the image url"
                                    value={editImageURL}
                                    id="imageURL"
                                    name="imageURL"
                                    label="Image URL"
                                    onChange={(e) => setEditImageURL(e.target.value)}
                                />
                            )}
                            <div className="w-full md:sticky md:bottom-0">
                                <Button
                                    icon={
                                        !loading ? (
                                            <FiEdit2 size={"16px"} />
                                        ) : (
                                            <FiLoader size={"16px"} className="animate-spin" />
                                        )
                                    }
                                    type="submit"
                                    text={
                                        loading
                                            ? "Editing"
                                            : "Edit QR Code"
                                    }
                                    wFull={true}
                                    onSubmit={handleSubmit}
                                    disabled={loading}
                                />
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <p className='text-2xl'>
                                    {title}
                                </p>
                                <VisitLink url={url} />
                            </div>
                            <p className='text-sm text-neutral-500'>
                                {url}
                            </p>
                            <div className="flex gap-2 mt-1">
                                <p className='text-xs text-neutral-400'>
                                    Created:{createdAt}
                                </p>
                                <p className='text-xs text-neutral-400'>
                                    Edited:{editedAt}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiEye size={18} />
                            <span className='text-2xl'>{views}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button
                                icon={<FiEdit2 size={16} />}
                                text={'Edit QR'}
                                wFull={true}
                                variant='outline'
                                disabled={loading}
                                onClick={() => setEdit(true)}
                            />
                            <Button
                                icon={<FiTrash size={16} />}
                                text={'Delete QR'}
                                wFull={true}
                                variant='outline'
                                onClick={handleDeleteQR}
                                disabled={loading}
                            />
                            {
                                loading && (
                                    <Loading inline message={loadingMsg} />
                                )
                            }
                        </div>
                    </div>
                )}
            </div>
        </Modal>
    )
}

export default QRDetailModal