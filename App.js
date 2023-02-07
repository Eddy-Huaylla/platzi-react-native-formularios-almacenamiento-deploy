import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { NavigationTabs } from './src/navigations/NavigationTabs';

export default function App() {
	return (
		<NavigationContainer>
			<NavigationTabs />
		</NavigationContainer>
	);
}
