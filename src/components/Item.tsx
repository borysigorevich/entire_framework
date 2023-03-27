import React from 'react';
import {Link, useParams} from "react-router-dom";

type ItemProps = {
    title: string
}

export const Item = ({title}: ItemProps) => {
    const params = useParams()

    const query = params['label']

    console.log(query)

    return (
        <div
            className={`
            ${query === title || (!query && title === 'Homepage') ? '0' : 'pt-[7px] px-3 pb-[9px]'} bg-black text-white 
            text-center transition-all duration-[1s] overflow-hidden min-w-[206px] [transition-timing-function:ease]`}
            style={{
                maxHeight: query === title || (!query && title === 'Homepage') ? 0 : '40px',
            }}
        >
            <Link to={'/' + title}>{title}</Link>
        </div>
    );
};