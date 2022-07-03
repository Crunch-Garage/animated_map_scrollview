
import { PropertyListing } from './screens';
import { useFonts } from 'expo-font';

export default function App() {
   /**app fonts */
   const [loaded] = useFonts({
    "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
    "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
    "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
    "Poppins-Thin": require('./assets/fonts/Poppins-Thin.ttf'),
    "Poppins-Light": require('./assets/fonts/Poppins-Light.ttf'),
    "Poppins-ExtraLight": require('./assets/fonts/Poppins-ExtraLight.ttf'),

  })

  if (!loaded) {
    return null;
  }

  return ( 
    <PropertyListing/> 
  );
}

