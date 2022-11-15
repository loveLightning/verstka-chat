import React from 'react'
import { SVGProps } from "react"

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.333 24c2.367 0 4.665-.793 6.53-2.25l5.86 5.86 1.886-1.885-5.861-5.86A10.602 10.602 0 0 0 25 13.332c0-5.88-4.785-10.666-10.667-10.666-5.881 0-10.666 4.785-10.666 10.666C3.667 19.215 8.452 24 14.333 24Zm0-18.667c4.412 0 8 3.588 8 8s-3.588 8-8 8-8-3.588-8-8 3.588-8 8-8Z"
        fill={props.fill}
      />
    </svg>
  )
}

