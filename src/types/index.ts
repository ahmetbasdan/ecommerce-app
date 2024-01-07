import { productsResponse } from "./service";

export type RootStackParamList = {
    Home: { screen: keyof BottomTabParamList };
    ProductDetail: productsResponse & { isFavorite: boolean };
}

export type BottomTabParamList = {
    ProductList: undefined;
    FavoriteList: undefined;
    Search: undefined;
    Basket: undefined;
}