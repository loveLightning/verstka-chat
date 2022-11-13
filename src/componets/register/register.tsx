import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { registerSchema } from '../../schemas'
import { device } from '../../utils/constants'
import { ButtonSubmit } from '../button-submit'
import { UserContext } from '../context/user'

interface Values {
    fullname: string
    email: string
    password: string
}

const initialValues = {
    fullname: '',
    email: '',
    password: ''
}

export const Register = () => {
    const [user, setUser] = useContext(UserContext)
    const navigate = useNavigate()
    const onSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setUser({
            auth: values.email
        })
        navigate('/')
    }

    return (
        <Wrapper>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={registerSchema}
            >
                {(handlers) => (
                    <Form>
                        <WrapeprInput>
                            <Input onBlur={handlers.handleBlur} placeholder='Имя фамилия' name='fullname' type="text" onChange={handlers.handleChange} />
                            <Error name="fullname" component="span" className="error" />
                        </WrapeprInput>
                        <WrapeprInput>
                            <Input onBlur={handlers.handleBlur} placeholder='Почта' name='email' type="email" onChange={handlers.handleChange} />
                            <Error name="email" component="span" className="error" />
                        </WrapeprInput>
                        <WrapeprInput>
                            <Input onBlur={handlers.handleBlur} minLength={8} placeholder='Пароль' name='password' type="password" onChange={handlers.handleChange} />
                            <Error name="password" component="span" className="error" />
                        </WrapeprInput>
                        <ButtonSubmit style={{fontWeight: 600, color: '#404040', marginTop: 10}} title="Зарегаться" value={!handlers.isValid || !handlers.dirty} />
                        <AnotherLogin>
                            <Social>Через соц. сети</Social>
                            <SocialWrapper>
                                <SocialLink to='/'>VK</SocialLink>
                                <SocialLink to='/'>Гугл</SocialLink>
                                <SocialLink to='/'>Фейсбук</SocialLink>
                                <SocialLink to='/'>Яндекс</SocialLink>
                            </SocialWrapper>
                        </AnotherLogin>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 90px;
`

const WrapeprInput = styled.div`
    max-width: 637px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    position: relative;
    margin-bottom: 20px;
    @media ${device.tablet} {
        margin-bottom: 0;
    }
`

const Input = styled(Field)`
    background-color: ${({ theme }) => theme.black};
    border: none;
    color: ${({ theme }) => theme.white};
    width: 100%;
    height: 60px;
    border: none;
    outline: none;
    font-size: 48px;
    line-height: 96.3%;
    text-align: center;
    border-radius: 20px;
    font-weight: 600;
    ::placeholder {
        font-family: 'Gilroy';
        color: ${({ theme }) => theme.placeholder};
        text-align: center;
        font-size: 48px;
        line-height: 96.3%;
        @media ${device.tablet} {
            font-size: 34px;
        }
    }

    @media ${device.tablet} {
        font-size: 34px;
        width: 100%;
        height: 60px;
    }
    @media ${device.tabletS} {
        height: 50px;
    }
`

const AnotherLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 80px;
    margin-top: 80px;
    @media ${device.tablet} {
        margin-bottom: 50px;
        margin-top: 50px;
    }
`

const Social = styled.p`
    color: ${({ theme }) => theme.grey};
    font-size: 16px;
    font-weight: 500;
`

const SocialWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`

const SocialLink = styled(Link)`
    color: ${({ theme }) => theme.white};
    font-size: 20px;
    font-weight: 20px;
`
const Error = styled(ErrorMessage)`
    color: ${({ theme }) => theme.red};
    bottom: -15px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    white-space: nowrap;
    @media ${device.tablet} {
        white-space: pre-wrap;
        position: static;
    }
`