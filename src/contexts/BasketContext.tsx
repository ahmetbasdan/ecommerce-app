import React, { ReactNode, createContext, useState } from 'react'
import { productsResponse } from '../types/service'

type initialStateType = {
    baskets: productsResponse[],
    count: number,
    add: (data: productsResponse) => void,
    remove: (data: productsResponse) => void,
}

const initialState: initialStateType = {
    baskets: [],
    count: 0,
    add: () => { },
    remove: () => { },
}
export const BasketContext = createContext<initialStateType>(initialState);

const BasketContextProvider: React.FC<{ children: ReactNode }> = (props) => {
    const [data, setData] = useState<initialStateType>(initialState)

    const add = (product: productsResponse) => {
        setData({ ...data, baskets: [...data.baskets, product] })
    }

    const remove = (product: productsResponse) => {
        const newFovorites = data.baskets.filter((item) => item.id !== product.id)
        setData({
            ...data,
            baskets: newFovorites
        })
    }

    const count = data?.baskets?.length || 0

    return (
        <BasketContext.Provider value={{ baskets: data.baskets, add, remove, count }}>
            {props.children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider