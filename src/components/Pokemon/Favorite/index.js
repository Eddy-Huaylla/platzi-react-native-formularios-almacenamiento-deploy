import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from '../../../services/favorite';

export const Favorite = ( { pokemonId } ) => {
	const [ isFavorite, setIsFavorite ] = useState( undefined );
	const [ reloadCheck, setReloadCheck ] = useState( false );

	useEffect( () => {
		( async () => {
			try {
				const response = await isPokemonFavoriteApi( pokemonId );
				setIsFavorite( response )
			} catch (error) {
				setIsFavorite( false )
			}
		})();
	}, [ pokemonId, reloadCheck ] )


	const onReloadCheckFavorite = () => {
		setReloadCheck( !reloadCheck );
	}

	const addFavorite = async () => {
		try {
			await addPokemonFavoriteApi( pokemonId );
			onReloadCheckFavorite();
		} catch (error) {
			console.error( error )
		}
	}

	const removeFavorite = async () => {
		try {
			await removePokemonFavoriteApi( pokemonId );
			onReloadCheckFavorite();
		} catch (error) {
			console.log(error);
		}
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
