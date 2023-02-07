import React from "react";
import { Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import { FavoriteNavigation } from "./FavoriteNavigation";
import { PokedexNavigation } from "./PokedexNavigation";
import { AccountNavigation } from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export const NavigationTabs = () => {

	const renderIcon = ( iconName, color, size ) => {
		return <Icon name={ iconName } color={color} size={size} />
	}

	const renderPokeball = () => {
		return (
			<Image
				source={require("../assets/pokeball.webp")}
				style={{ width: 75, height: 75, top: -15 }}
			/>
		);
	}

	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Favorite"
				component={ FavoriteNavigation }
				options={{
					tabBarLabel: "Favoritos",
					tabBarIcon: ( { color, size } ) => renderIcon( "heart", color, size )
				}}
			/>

			<Tab.Screen
				name="Pokedex"
				component={ PokedexNavigation }
				options={{
					tabBarLabel: "",
					tabBarIcon: () => renderPokeball()
				}}
			/>

			<Tab.Screen
				name="Account"
				component={ AccountNavigation }
				options={{
					tabBarLabel: "Mi cuenta",
					tabBarIcon: ( { color, size }) => renderIcon( "user", color, size )
				}}
			/>
		</Tab.Navigator>
	)
}
