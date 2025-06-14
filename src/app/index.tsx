import {RootState} from "@/src/store/store";
import {Redirect} from "expo-router";
import {useSelector} from "react-redux";

export default function Index() {
  const user = useSelector((state: RootState) => state.auth.user);

  if (user) {
    return <Redirect href='/(tabs)' />;
  } else {
    return <Redirect href='/login' />;
  }
}
