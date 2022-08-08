import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import FlatLists from "./components/Main";
import { store } from "./components/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <FlatLists></FlatLists>
      <View style={styles.container}>
        <StatusBar backgroundColor="#212121" style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
