import { Image, StyleSheet, View } from "react-native";

export default function Avatar() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={{
          uri: "https://i.pinimg.com/1200x/36/03/b3/3603b3e22904f3ddda3271fda9e4e8d9.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "red",
    borderRadius: 50,
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  imagem: {
    width: 55,
    height: 55,
    resizeMode: "contain",
  },
});
