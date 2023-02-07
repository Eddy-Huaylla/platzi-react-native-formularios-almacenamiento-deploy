import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsFavoriteApi } from "../services/favorite";

export const Favorite = () => {

	const checkFavorites = async () => {
		const response = await getPokemonsFavoriteApi();
		console.log(response);
	};

	return (
		<SafeAreaView>
			<Text>Favorite</Text>
			<Button title="Obtener favoritos" onPress={ checkFavorites } />
		</SafeAreaView>
	);
}
