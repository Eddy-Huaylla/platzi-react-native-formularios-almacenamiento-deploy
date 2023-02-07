import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { NavigationTabs } from './src/navigations/NavigationTabs';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<NavigationTabs />
			</AuthProvider>
		</NavigationContainer>
	);
}
