import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import remove from '../../assets/images/remove.svg'
import { device } from '../../utils/constants'

interface Props {
    file: File
    image?: string
}

export const PreviewImage: React.FC<Props> = ({ file }) => {

    const [pendingFiles, setPendingFiles] = useState<File[]>([])
    const [previews, setPreviews] = useState<Array<{ file: File, image: string }>>([])

    const loadImage = (file: File) => new Promise<string>(resolve => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.readAsDataURL(file)
    })

    const removeImage = (el: Props) => {
        setPreviews(prev => prev.filter(item => item.file !== el.file))
    }

    useEffect(() => {
        if (!pendingFiles.includes(file) && !previews.some(preview => preview.file === file)) {
            setPendingFiles(images => images.concat(file))
            loadImage(file).then(preview => setPreviews(previews => {
                return [
                    ...previews,
                    {
                        file,
                        image: preview
                    }
                ]
            }))
        }
    }, [file, pendingFiles, previews])

    return (
        <>
            {previews.length && previews?.map((el, id) => {
                return (
                    <WrapperImage key={id}>
                        <Preview alt='Preview' src={el.image} />
                        <RemoveImage onClick={() => removeImage(el)} src={remove} alt="Remove" />
                    </WrapperImage>
                )
            })}
        </>
    )
}

const WrapperImage = styled.div`
    position: relative;
`

const Preview = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 16px;
    @media ${device.tablet} {
        width: 78px;
        height: 78px;
    }
`

const RemoveImage = styled.img`
    position: absolute;
    top: -6px;
    right: -6px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.white};
    padding: 8px;
    cursor: pointer;
`