import {Loading} from "@/src/components/ui/Loading";
import {RootState} from "@/src/store/store";
import {Redirect} from "expo-router";
import React from "react";
import {View} from "react-native";
import {useSelector} from "react-redux";

export default function Index() {
  const {user, isAuthenticated, loading} = useSelector((state: RootState) => state.auth);

  // Show loading while determining auth state
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Loading text='Loading...' />
      </View>
    );
  }

  // Redirect based on authentication state
  if (isAuthenticated && user) {
    return <Redirect href='/(tabs)' />;
  } else {
    return <Redirect href='/(auth)/login' />;
  }
}
