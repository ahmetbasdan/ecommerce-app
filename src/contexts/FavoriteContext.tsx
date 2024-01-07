import React, { ReactNode, createContext, useState } from 'react'
import { productsResponse } from '../types/service'

type initialStateType = {
    favorites: productsResponse[],
    add: (data: productsResponse) => void,
    remove: (data: productsResponse) => void,
}

const initialState: initialStateType = {
    favorites: [],
    add: () => { },
    remove: () => { },
}
export const FavoriteContext = createContext<initialStateType>(initialState);

const FavoriteContextProvider: React.FC<{ children: ReactNode }> = (props) => {
    const [data, setData] = useState<initialStateType>(initialState)

    const add = (product: productsResponse) => {
        setData({ ...data, favorites: [...data.favorites, product] })
    }

    const remove = (product: productsResponse) => {
        const newFovorites = data.favorites.filter((item) => item.id !== product.id)
        setData({
            ...data,
            favorites: newFovorites
        })
    }

    return (
        <FavoriteContext.Provider value={{ favorites: data.favorites, add, remove }}>
            {props.children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContextProvider