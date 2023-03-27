import React from 'react';
import {useQuery} from "@apollo/client";
import {MenuItemsQuery} from "../__generated__/graphql";

import {QUERY_MENU_ITEMS} from "../gql";
import {Item} from "../components";

export const Home = () => {
    const {data, loading} = useQuery<MenuItemsQuery>(QUERY_MENU_ITEMS)

    return (
        <div className='h-full grid place-content-center'>
            {loading
                ? <p>Loading...</p>
                : (
                    <div className='grid place-items-start'>
                        {data?.menuItems?.data.map(item => (
                            <Item key={item.id} title={item.attributes?.title!}/>
                        ))}
                    </div>
                )
            }
        </div>
    );
};