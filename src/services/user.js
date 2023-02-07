import { user, userDetails } from "../utils/userDB";

export const getUser = async ( username, password ) => {
	try {
		if (username !== user.username || password !== user.password) {
			throw new Error("El usuario o la contraseña no son correcto")
		  } else {
			return userDetails;
		  }
	} catch (error) {
		throw error;
	}
}
