import {useFonts} from "expo-font";
import {Stack} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {StatusBar} from "expo-status-bar";
import {useEffect} from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {ErrorBoundary} from "../components/common/ErrorBoundary";
import {Loading} from "../components/ui/Loading";
import {ToastProvider} from "../components/ui/Toast";
import {persistor, store} from "../store/store";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={<Loading text='Loading...' />} persistor={persistor}>
          <ToastProvider>
            <Stack screenOptions={{headerShown: false}}>
              <Stack.Screen name='index' />
              <Stack.Screen name='(auth)' />
              <Stack.Screen name='(tabs)' />
              <Stack.Screen
                name='(modals)'
                options={{
                  presentation: "modal",
                  gestureEnabled: true,
                  animation: "slide_from_bottom"
                }}
              />
              <Stack.Screen
                name='+not-found'
                options={{
                  title: "Oops!",
                  headerShown: true
                }}
              />
            </Stack>
            <StatusBar style='auto' />
          </ToastProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}
