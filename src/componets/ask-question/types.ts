import firstEmoji from '../../assets/images/first-emoji.svg'
import secondEmoji from '../../assets/images/second-emoji.svg'
import thirdEmoji from '../../assets/images/third-emoji.svg'
import fourthEmoji from '../../assets/images/fourth-emoji.svg'
import fifthEmoji from '../../assets/images/fifth-emoji.svg'

export interface Props {
    id: string
    src: string
    title: string
    select: boolean
}

export const emoji: Props[] = [
    {
        id: '0',
        src: firstEmoji,
        title: 'Emoji',
        select: true
    },
    {
        id: '1',
        src: secondEmoji,
        title: 'Emoji',
        select: false
    },
    {
        id: '2',
        src: thirdEmoji,
        title: 'Emoji',
        select: false
    },
    {
        id: '3',
        src: fourthEmoji,
        title: 'Emoji',
        select: false
    },
    {
        id: '4',
        src: fifthEmoji,
        title: 'Emoji',
        select: false
    },
]