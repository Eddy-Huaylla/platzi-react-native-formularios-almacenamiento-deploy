import React from "react";
import { View } from "react-native";
import { LoginForm } from "../components/Auth/LoginForm/index.";
import { UserData } from "../components/Auth/UserData";


export const Account = () => {
	const auth = null;

	return <View>{ auth ? <UserData /> : <LoginForm /> }</View>;
}
