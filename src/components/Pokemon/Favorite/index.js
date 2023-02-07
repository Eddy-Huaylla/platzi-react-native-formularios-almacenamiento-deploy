import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addPokemonFavoriteApi, isPokemonFavoriteApi } from '../../../services/favorite';

export const Favorite = ( { pokemonId } ) => {
	const [ isFavorite, setIsFavorite ] = useState( undefined );

	useEffect( () => {
		( async () => {
			try {
				const response = await isPokemonFavoriteApi( pokemonId );
				setIsFavorite( response )
			} catch (error) {
				setIsFavorite( false )
			}
		})();
	}, [ pokemonId ] )

	const addFavorite = () => {
		addPokemonFavoriteApi( pokemonId );
	}

	const removeFavorite = () => {
		console.log( 'Eliminar de favoritos' )
	}

	return (
		<Icon
			name='heart'
			color='#fff'
			size={ 20 }
			style={ { marginRight: 20 } }
			solid= { isFavorite }
			onPress={ () => isFavorite ? removeFavorite() : addFavorite() }
		/>
	)
}
