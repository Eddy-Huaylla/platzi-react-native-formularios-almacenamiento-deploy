import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Text } from "react-native";

import { getPokemonsFavoriteApi } from "../services/favorite";
import { getPokemonDetailsApi } from "../services/pokemon";

import { useAuth } from "../hooks/useAuth";

import { PokemonList } from "../components/PokemonList";

export const Favorite = () => {
	const [ pokemons, setPokemons ] = useState( [] ) ;
	const { auth } = useAuth();

	useFocusEffect(
		useCallback( () => {
			if( auth ) {
				( async () => {
					try {
						const response = await getPokemonsFavoriteApi();

						const pokemonsArray = [];
						for await ( const id of response ) {
							const pokemonDetails = await getPokemonDetailsApi( id );

							pokemonsArray.push( {
								id: pokemonDetails.id,
								name: pokemonDetails.name,
								type: pokemonDetails.types[0].type.name,
								order: pokemonDetails.order,
								image: pokemonDetails.sprites.other["official-artwork"].front_default,
							} );
						}

						setPokemons([...pokemons, ...pokemonsArray]);

					} catch (error) {
						console.error(error);
					}
				} )();
			}
		}, [ auth ] )
	)


	return !auth ? (
		<Text>Usuario No Logeado</Text>
	) : (
		<PokemonList
			pokemons = { pokemons }
		/>
	)

}
