import React from 'react'
import { SVGProps } from "react"
import { useTheme } from 'styled-components'

export const LogoIcon = (props: SVGProps<SVGSVGElement>) => {
    const { link } = useTheme()
    return (
        <svg
            style={{ width: 'inheriat', height: 'inheriat'}}
            width={'inheriat'}
            height={'inheriat'}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M0 32h2.8v-7.96h3.68v4h.96V32h4.64v-3.96H13v-4h.92v-3.96H13v-4h-.92v-3.96H7.44v3.96h-.96v4H2.8v-7.96H0V32Zm7.44-11.92h.92v-4h2.76v4h.96v3.96h-.96v4H8.36v-4h-.92v-3.96ZM18.559 32h7.44v-3.96h-6.48v-4h6.48v4h1.84V32h2.8V12.12h-12.08v3.96h9.28v4h-10.2v3.96h-.92v4h1.84V32Zm18.99-20h6.48V8.04h-6.48V12Zm7.4 8.08h-5.56v3.96h5.56V32h2.8V16.08h-2.8v4ZM33.828 32h2.8v-3.96h2.76v-4h-2.76v-7.96h-2.8V32Zm19.518-15.92h8.32v-3.96h-8.32v3.96Zm8.32 4h2.8v-4h-2.8v4Zm-10.2 7.96h1.88V16.08h-1.88v4h-.92v3.96h.92v4Zm10.2 0h2.8v-4h-2.8v4ZM53.347 32h8.32v-3.96h-8.32V32Zm15.759 0h7.44v-3.96h-6.48v-4h6.48v4h1.84V32h2.8V12.12h-12.08v3.96h9.28v4h-10.2v3.96h-.92v4h1.84V32Zm26.389 0h2.8V12.12h-2.8v4h-1.84v3.96h1.84V32Zm-11.12 0h2.8V20.08h1.84v-3.96h-1.84v-4h-2.8V32Zm6.48-11.92h-1.84v3.96h1.84v-3.96Zm2.8 0h-1.84v3.96h1.84v-3.96Zm-1.84 3.96h-.96v4h.96v-4Zm9.279-3.96h.92v3.96h1.84V12.16h-2.76v7.92Zm2.76 7.96h4.64V32h-5.56v3.96h6.48V32h1.88v-3.96h.92v-3.96h2.76V12.16h-2.76v7.92h-.92v4h-7.44v3.96Zm13.958 7.92h2.761v-7.92h9.28v-4h1.84v-7.92h-1.84v-3.96h-12.041v23.8Zm2.761-19.84h8.36v7.92h-8.36v-7.92ZM136.371 32h7.44v-3.96h-6.48v-4h6.48v4h1.84V32h2.8V12.12h-12.08v3.96h9.28v4h-10.2v3.96h-.92v4h1.84V32Zm18.99-20h6.48V8.04h-6.48V12Zm7.4 8.08h-5.56v3.96h5.56V32h2.8V16.08h-2.8v4ZM151.641 32h2.8v-3.96h2.76v-4h-2.76v-7.96h-2.8V32Z"
                fill={link}
            />
        </svg>
    )
}
