import firstMyPhoto from '../../assets/images/my-photo.png'
import secondMyPhoto from '../../assets/images/my-photo-2.png'
import thirdMyPhoto from '../../assets/images/my-photo-3.png'

interface Props {
    id: number,
    src: string,
    title: string
}

export const galleyImages: Props[] = [
    {
        id: 0,
        src: firstMyPhoto,
        title: 'Image'
    },
    {
        id: 1,
        src: secondMyPhoto,
        title: 'Image'
    },
    {
        id: 2,
        src: thirdMyPhoto,
        title: 'Image'
    }
]