import React from 'react';
import {Link, useParams} from "react-router-dom";

type ItemProps = {
    title: string
}

export const Item = ({title}: ItemProps) => {
    const params = useParams()

    const linkDivRef = React.useRef<HTMLAnchorElement | null>(null)
    const [height, setHeight] = React.useState(0)

    const query = params['label']

    React.useEffect(() => {
        console.dir(linkDivRef.current, '***')
        setHeight(linkDivRef.current?.offsetHeight!)
    }, [])

    return (
        <div
            className={`relative w-full ${query === title ? 'md-0' : 'mb-1'}`}
        >
            <div className={`
            text-white text-start relative transition-all duration-[1s] overflow-hidden [transition-timing-function:ease] text-[44px] max-w-[320px]`}
                 style={{
                     maxHeight: query === title || (!query && title === 'Homepage') ? 0 : height + 'px',
                 }}>
                <Link
                    ref={linkDivRef}
                    className='bg-[rgb(37,37,37)] leading-[104%] text-center left-[12px] bottom-[4px] link'
                    to={'/' + title}
                >{title}</Link>
            </div>
        </div>
    );
};