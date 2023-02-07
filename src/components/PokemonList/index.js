import React from "react";
import { StyleSheet, FlatList, ActivityIndicator, Platform } from "react-native";
import { PokemonCard } from "../PokemonCard";

export const PokemonList = ( props ) => {
	const { pokemons, loadPokemons, isNext } = props;

	const laodMore = () => {
		loadPokemons();
	};

	return (
		<FlatList
			data={ pokemons }
			numColumns={ 2 }
			showsVerticalScrollIndicator={ false }
			keyExtractor={ ( pokemon ) => String( pokemon.id ) }
			renderItem={ ( { item } ) => <PokemonCard pokemon = { item } /> }
			contentContainerStyle={ styles.flatListContentContainer }
			onEndReached={ isNext && laodMore }
			onEndReachedThreshold={ 0.1 }
			ListFooterComponent={
				isNext && (
					<ActivityIndicator
						size="large"
						style={ styles.spinner }
						color="#AEAEAE"
					/>
				)
			}
		/>
	);
}

const styles = StyleSheet.create( {
	flatListContentContainer: {
		paddingHorizontal: 5,
		marginTop: Platform.OS === "android" ? 20 : 0,
	},
	spinner: {
		marginTop: 20,
		marginBottom: Platform.OS === "ios" ? 60 : 90,
	}
} );
