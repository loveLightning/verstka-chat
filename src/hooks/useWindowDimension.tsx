import { useEffect, useState } from "react";

interface Props {
    width: number | undefined
    height: number | undefined
}

export const useWindowDimension = () => {
    const [windowSize, setWindowSize] = useState<Props>({
        width: undefined,
        height: undefined,
    })
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [setWindowSize])
    return windowSize;
}