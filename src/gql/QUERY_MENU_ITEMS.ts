import { gql } from "../__generated__/gql";

export const QUERY_MENU_ITEMS = gql(`
    query MenuItems {
        menuItems {
            data {
                id
                attributes {
                    title
                }
            }
        }
    }
`)