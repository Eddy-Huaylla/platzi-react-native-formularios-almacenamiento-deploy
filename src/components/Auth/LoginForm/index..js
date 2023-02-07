import React from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,
	Alert
} from "react-native";

import { useFormik } from "formik";
import * as Yup from "yup";

import { getUser } from "../../../services/user";

export const LoginForm = () => {
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object( validationSchema() ),
		validateOnChange: false, // para validar en on change o no
		onSubmit: ( formValue ) => {
			loadUser( formValue );
		}
	});

	const loadUser = async ( formValue ) => {
		try {
			const { username, password } = formValue;
			const response = await getUser( username, password );
			console.log( response )
		} catch ( error ) {
			Alert.alert(
				"Datos incorrectos",
				error.message,
				[
					{
						text: "Aceptar"
					}
				],
				{
					cancelable: true
				}
			);
		}
	}

	return (
		<View>
			<Text style={ styles.title }>Iniciar sesión</Text>
			<TextInput
				placeholder="Nombre de usuario"
				style={ styles.input }
				autoCapitalize="none"
				value={ formik.values.username }
				onChangeText={ ( text ) => formik.setFieldValue( "username", text ) }
			/>
			<TextInput
				placeholder="Contraseña"
				style={ styles.input }
				autoCapitalize="none"
				secureTextEntry={ true }
				value={ formik.values.password }
				onChangeText={ ( text ) => formik.setFieldValue( "password", text ) }
			/>
			<Button title="Entrar" onPress={ formik.handleSubmit } />

			<Text style={ styles.error }>{ formik.errors.username }</Text>
			<Text style={ styles.error }>{ formik.errors.password }</Text>
		</View>
	);
}


function initialValues() {
	return {
		username: "",
		password: ""
	}
}

function validationSchema() {
	return {
		username: Yup.string().required( "El usuario es obligatorio" ),
		password: Yup.string().required( "La contraseña es obligatoria" )
	}
}

const styles = StyleSheet.create( {
	title: {
		textAlign: "center",
		fontSize: 28,
		fontWeight: "bold",
		marginTop: 50,
		marginBottom: 15,
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 10,
	},
	error: {
		textAlign: "center",
		color: "#f00",
		marginTop: 20,
	}
} );
