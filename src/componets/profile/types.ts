import avatar from '../../assets/images/profile-avatar.png'

interface Props {
    id: string
    fullname: string
    email: string
    linkWebsite: string 
    avatar: string
}

export const profileData: Props = {
    id: '0',
    fullname: 'Андрей Колесник',
    email: 'andkolesik117@yandex.ru',
    linkWebsite: '',
    avatar: avatar
}