import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";

import { getPokemonDetailsApi } from "../services/pokemon";

import { useAuth } from "../hooks/useAuth";

import { Header } from "../components/Pokemon/Header";
import { Type } from "../components/Pokemon/Type";
import { Stats } from "../components/Pokemon/Stats";
import { Favorite } from "../components/Pokemon/Favorite";

export const Pokemon = ( props ) => {
	const {
		navigation,
		route: { params }
	} = props;
	const [ pokemon, setPokemon ] = useState( null );
	const { auth } = useAuth()

	useEffect(() => {
		navigation.setOptions( {
			headerRight: () => ( auth ? <Favorite pokemonId={ pokemon?.id } /> : null ),
			headerLeft: () => (
				<Icon
					name="arrow-left"
					color="#fff"
					size={ 20 }
					style={ { marginLeft: 20 } }
					onPress={ navigation.goBack }
				/>
			),
		} );
	}, [ navigation, params, pokemon, auth ]);

	useEffect( () => {
		( async () => {
			try {
				const response = await getPokemonDetailsApi( params.id );
				setPokemon(response);
			} catch (error) {
				console.error( error );
				navigation.goBack();
			}
		} )();
	}, [ params ] );

	if ( !pokemon ) return null;

	return (
		<ScrollView>
			<Header
				name={ pokemon.name }
				order={ pokemon.order }
				image={ pokemon.sprites.other["official-artwork"].front_default }
				type={ pokemon.types[0].type.name }
			/>
			<Type types={ pokemon.types } />
			<Stats stats={ pokemon.stats } />
		</ScrollView>
	);
}
