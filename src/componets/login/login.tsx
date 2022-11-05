import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { loginSchema } from '../../schemas'
import { device } from '../../utils/constants'
import { ButtonSubmit } from '../button-submit'
import { UserContext } from '../context/user'

interface Values {
    email: string
    password: string
}

const initialValues = {
    email: '',
    password: ''
}

export const Login = () => {
    const [user, setUser] = useContext(UserContext)
    const onSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        console.log(values)
        setUser({
            auth: values.email
        })
    }

    return (
        <Wrapper>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={loginSchema}
            >
                {(handlers) => (
                    <Form>
                        <WrapeprInput>
                            <Input onBlur={handlers.handleBlur} placeholder='Почта' name='email' type="email" onChange={handlers.handleChange} />
                            <Error name="email" component="span" className="error" />
                        </WrapeprInput>
                        <WrapeprInput>
                            <Input onBlur={handlers.handleBlur} minLength={8} placeholder='Пароль' name='password' type="password" onChange={handlers.handleChange} />
                            <Error name="password" component="span" className="error" />
                        </WrapeprInput>
                        <ButtonSubmit title="Войти" value={!handlers.isValid || !handlers.dirty} />
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
`

const Input = styled(Field)`
    background-color: ${({ theme }) => theme.black};
    border: none;
    color: ${({ theme }) => theme.white};
    width: 100%;
    height: 86px;
    border: none;
    outline: none;
    font-size: 48px;
    line-height: 96.3%;
    text-align: center;
    border-radius: 20px;
    ::placeholder {
        color: ${({ theme }) => theme.grey};
        text-align: center;
        font-size: 48px;
        line-height: 96.3%;
        @media ${device.tabletS} {
            font-size: 34px;
        }
    }

    @media ${device.tabletS} {
        font-size: 34px;
    }
`

const AnotherLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 100px;
`

const Social = styled.p`
    color: ${({ theme }) => theme.grey};
`

const SocialWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`

const SocialLink = styled(Link)`
    color: ${({ theme }) => theme.white};
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