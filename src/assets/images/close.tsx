import React from 'react'
import { SVGProps } from "react"

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={20}
            height={20}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M17.454.667 10 8.12 2.547.667l-1.88 1.88L8.12 10 .667 17.453l1.88 1.88L10 11.88l7.454 7.453 1.88-1.88L11.88 10l7.454-7.453-1.88-1.88Z"
                fill="#6F6F6F"
            />
        </svg>
    )
}

