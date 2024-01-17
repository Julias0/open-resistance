import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.dhar.opresistance',
  appName: 'open-resistance',
  webDir: 'www/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
