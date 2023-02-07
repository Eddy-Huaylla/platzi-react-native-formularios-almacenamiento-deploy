import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'

export const Favorite = ( { pokemonId } ) => {
	const addFavorite = () => {
		console.log( 'add to favorite ' + pokemonId )
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
