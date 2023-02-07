import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addPokemonFavoriteApi } from '../../../services/favorite';

export const Favorite = ( { pokemonId } ) => {
	const addFavorite = () => {
		addPokemonFavoriteApi( pokemonId );
	}

	return (
		<Icon
			name='heart'
			color='#fff'
			size={ 20 }
			style={ { marginRight: 20 } }
			onPress={ () => addFavorite() }
		/>
	)
}
