import logo from '../../assets/images/logo.svg'
import search from '../../assets/images/search.svg'

interface Props {
    source?: string
    title: string
    path: string
    id: number
}

export const menuItem: Props[] = [
    {
        source: logo,
        title: '',
        path: '/',
        id: 0
    },
    {
        title: 'Вопросы',
        path: '/',
        id: 1
    },
    {
        title: 'О проекте',
        path: '/',
        id: 2
    },
    {
        title: 'Вопросы',
        path: '/auth/login',
        id: 3
    },
    {
        source: search,
        title: '',
        path: '/',
        id: 4
    }
]