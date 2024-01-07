import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../types';
//Screens
import ProductList from '../screens/productList';
import FavoriteList from '../screens/favoriteList';
import Search from '../screens/search';
import Basket from '../screens/basket';
import * as Icon from '../assets/svg/BottombarSvg';
import constants from '../utils/constants';
import { StyleSheet } from 'react-native';
import colors from '../utils/colors';
import { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomtabNavigation = () => {
  const { count } = useContext(BasketContext)

  const iconColor = (focused: boolean) => focused ? colors.primary : colors.black

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBadgeStyle: styles.tabBarBadgeStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
      }}
    >
      <Tab.Screen
        name="ProductList"
        options={{
          tabBarIcon: ({ focused }) => <Icon.Home fill={iconColor(focused)} />,
        }}
        component={ProductList}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused }) => <Icon.Search fill={iconColor(focused)} />
        }}
        component={Search}
      />
      <Tab.Screen
        name="FavoriteList"
        options={{
          tabBarIcon: ({ focused }) => <Icon.Favorite fill={iconColor(focused)} />
        }}
        component={FavoriteList}
      />
      <Tab.Screen
        name="Basket"
        options={{
          tabBarBadge: count ? count : undefined,
          tabBarIcon: ({ focused }) => <Icon.Basket fill={iconColor(focused)} />
        }}
        component={Basket}
      />
    </Tab.Navigator>
  )
}

export default BottomtabNavigation

const styles = StyleSheet.create({
  tabBarStyle: {
    height: constants.bottomNavHeight,
    borderRadius: 69,
    marginHorizontal: 12,
    paddingHorizontal: 19,
    marginBottom: 12,
    position: 'absolute',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  tabBarBadgeStyle: {
    transform: [{ translateY: 10 }],
    left: 4,
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: colors.black,
  },
  tabBarItemStyle: {
    height: constants.bottomNavHeight,
  }
})