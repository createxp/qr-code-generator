import React from 'react'
import { useGenerateQR } from '../../../../../contexts'
import { Button, Input, Switch } from '../../../../utility'

const NewQRForm = () => {
    const {
        title,
        url,
        bgColor,
        fgColor,
        qrSize,
        includeImage,
        imageURL,
        showTitle,
        setTitle,
        setUrl,
        setBgColor,
        setFgColor,
        setQrSize,
        setincludeImage,
        setImageURL,
        setShowTitle,
    } = useGenerateQR()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({
            title,
            url,
            bgColor,
            fgColor,
            qrSize,
            includeImage,
            imageURL,
            showTitle,
        })
    }
    return (
        <form className='w-full md:w-1/2 flex flex-col gap-4' onSubmit={handleSubmit}>
            <Input
                type='text'
                placeholder='Enter the title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id='title'
                name='title'
                label='QR Code Title'
                max={20}
            />
            <Input
                type='url'
                placeholder='Enter the url'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                id='url'
                name='url'
                label='QR Code URL'
            />
            <div className="flex gap-2">
                <Input
                    type='color'
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    id='color'
                    name='color'
                    label='BG Color'
                    fit={true}
                />
                <Input
                    type='color'
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    id='color'
                    name='color'
                    label='FG Color'
                    fit={true}
                />
            </div>
            <Input
                type='range'
                value={qrSize}
                onChange={(e) => setQrSize(Number(e.target.value))}
                id='qrSize'
                name='qrSize'
                label='QR Code Size'
                min={100}
                max={280}
                step={1}
            />
            <div className="flex gap-4">

                <Switch
                    id='includeImage'
                    name='includeImage'
                    label='Include Image'
                    state={includeImage}
                    onChange={() => setincludeImage(!includeImage)}
                    wrapperClassName='w-fit'
                />
                <Switch
                    id='showTitle'
                    name='showTitle'
                    label='Show Title on QR'
                    state={showTitle}
                    onChange={() => setShowTitle(!showTitle)}
                    wrapperClassName='w-fit'
                />
            </div>
            {includeImage && (
                <Input
                    type='url'
                    placeholder='Enter the image url'
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}
                    id='imageURL'
                    name='imageURL'
                    label='Image URL'
                />
            )}
            <Button
                type='submit'
                text={includeImage ? 'Save QR Code with Image' : 'Save QR Code'}
                wFull={true}
                onSubmit={handleSubmit}
            />
        </form>
    )
}

export default NewQRForm