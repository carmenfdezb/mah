import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.ffalt.mah',
  appName: 'mah',
  webDir: '../../dist',
	backgroundColor: '#2b424f',
	bundledWebRuntime: false,
	android: {
		backgroundColor: '#2b424f'
	}
};

export default config;
