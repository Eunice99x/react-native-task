import {authActions} from "@/src/store/slices/authSlice";
import {RootState} from "@/src/store/store";
import {Link} from "expo-router";
import {useState} from "react";
import {Button, StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {ThemedText} from "../../components/common/ThemedText";
import {ThemedView} from "../../components/common/ThemedView";

export default function HomeScreen() {
  const user = useSelector((state: RootState) => state.auth.user);
  const [dataToSubmit, setDataToSubmit] = useState({
    name: "",
    email: ""
  });
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.main}>
        <ThemedText style={styles.title}>Hello!</ThemedText>
        <ThemedText style={styles.subtitle}>Welcome to my React Native app</ThemedText>
      </View>

      {!user ? (
        <View style={styles.authBox}>
          <Link href='/(auth)/login' style={styles.link}>
            Go to Login Page
          </Link>
        </View>
      ) : (
        <View style={styles.userInfo}>
          <ThemedText style={{marginBottom: 10}}>User Info:</ThemedText>
          <ThemedText>Email: {user.email}</ThemedText>
          <ThemedText>Name: {user.name}</ThemedText>
          <View style={{marginTop: 10}}>
            <Button title='Logout User' onPress={logout} />
          </View>
        </View>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  main: {
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18
  },
  input: {
    width: 250,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8
  },
  authBox: {
    marginTop: 20,
    alignItems: "center"
  },
  userInfo: {
    marginTop: 20,
    alignItems: "center"
  },
  link: {
    marginTop: 15,
    color: "#007aff",
    fontSize: 16
  }
});
