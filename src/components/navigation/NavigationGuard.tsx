import {RootState} from "@/src/store/store";
import {router} from "expo-router";
import React from "react";
import {useSelector} from "react-redux";

interface NavigationGuardProps {
  children: React.ReactNode;
}

export const NavigationGuard: React.FC<NavigationGuardProps> = ({children}) => {
  const {isAuthenticated, loading} = useSelector((state: RootState) => state.auth);

  React.useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        // Redirect to login if not authenticated
        router.replace("/(auth)/login");
      }
    }
  }, [isAuthenticated, loading]);

  // Don't render anything while loading
  if (loading) {
    return null;
  }

  return <>{children}</>;
};

// Navigation helpers for MVP
export const NavigationHelpers = {
  goToLogin: () => router.replace("/(auth)/login"),
  goToHome: () => router.replace("/(tabs)"),
  goToProfile: () => router.push("/(tabs)/profile"),
  goToSettings: () => router.push("/(modals)/settings"),
  goBack: () => router.back(),
  canGoBack: () => router.canGoBack()
};
