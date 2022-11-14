import React from 'react'
import styled from 'styled-components'
import { HeaderEmoji } from './header-emoji'
import { Formik, Form, FormikHelpers } from 'formik';
import upload from '../../assets/images/upload.svg'
import { PreviewImage } from './preview-image';
import { device } from '../../utils/constants';
import { ButtonSubmit } from '../button-submit';

interface Values {
    question: string
    file: any
    emoji: string
}

const initialValues = {
    question: '',
    file: null,
    emoji: ''
}

export const AskQuestion: React.FC<{ title?: string }> = ({ title = 'Задать вопрос' }) => {

    const onSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    }

    return (
        <>
            <HeaderEmoji></HeaderEmoji>
            <FormWrapper>
                <div>
                    <Title>Ваш вопрос</Title>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                    >
                        {(handlers) => (
                            <Form>
                                <TextArea
                                    name='question'
                                    cols={30}
                                    placeholder={'Введите текст'}
                                    rows={9}
                                    onChange={handlers.handleChange}
                                />
                                <TitleImages>Картинки</TitleImages>
                                <input multiple accept='image/*' name='file' type="file" id="upload" hidden onChange={(e?: any) => {
                                    let preview: any = e.target.files[0];
                                    handlers.setFieldValue('file', preview)
                                }} />
                                <WrapperImages>
                                    <Label htmlFor="upload"><UploadImg src={upload} alt='Upload' /></Label>
                                    {handlers.values.file && <PreviewImage file={handlers.values.file} />}
                                </WrapperImages>
                                <Button fixed={true} style={{position: "fixed", bottom: '40px', fontWeight: '600'}} title={title} value={!handlers.values.question} />
                            </Form>
                        )
                        }
                    </Formik>
                </div>
            </FormWrapper>
        </>
    )
}

const FormWrapper = styled.div`
    color: ${({ theme }) => theme.white};
    
`

const Title = styled.h2`
    font-weight: 600;
    font-size: 30px;
    line-height: 134.3%;
    
    @media ${device.tablet} {
        font-size: 24px;
    }
`

const TextArea = styled.textarea`
    width: 100%;
    background-color: ${({ theme }) => theme.black};
    border-color: ${({ theme }) => theme.black};
    padding: 16px;
    padding-left: 0px;
    font-size: 20px;
    line-height: 27px;
    outline: none;
    resize: none;
    color: ${({ theme }) => theme.white};
    font-family: 'Gilroy';
    ::placeholder {
        font-family: 'Gilroy';
        color: ${({ theme }) => theme.placeholder};
        font-size: 20px;
        font-weight: 600;
        line-height: 27px;
        @media ${device.tabletS} {
            font-size: 17px;
            line-height: 134.3%;
        }
    }
    ::-webkit-scrollbar {
    width: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.darkGrey};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.grey};
        border-radius: 10px;
    }

    @media ${device.tablet} {
        font-size: 17px;
    }
`

const TitleImages = styled.p`
    font-size: 30px;
    line-height: 134.3%;
    margin-bottom: 20px;
    font-weight: 500;
    @media ${device.tablet} {
        font-size: 24px;
    }
`

const UploadImg = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Label = styled.label`
    width: 100px;
    height: 100px;
    background-color: ${({ theme }) => theme.darkGrey};
    padding: 27px;
    position: relative;
    display: block;
    cursor: pointer;
    border-radius: 16px;
    @media ${device.tablet} {
        width: 78px;
        height: 78px;
    }
`

const WrapperImages = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
`

const Button = styled(ButtonSubmit)`
 
`