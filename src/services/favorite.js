import AsyncStorage from "@react-native-async-storage/async-storage";

import { FAVORITE_STORAGE } from "../utils/constants";

export const getPokemonsFavoriteApi = async () => {
	try {
		const response = await AsyncStorage.getItem( FAVORITE_STORAGE );
		return response;
	} catch (error) {
		throw error;
	}
}

export const addPokemonFavoriteApi = async ( id ) => {
	try {
		const favorites = [];
		favorites.push(id);
		await AsyncStorage.setItem( FAVORITE_STORAGE, JSON.stringify( favorites ) );
	} catch (error) {
		throw error;
	}
}
