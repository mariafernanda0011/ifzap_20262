import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

type AvatarProps = {
  aoTocar?: () => void 
};

export default function Avatar({aoTocar}: AvatarProps) {
  return (
    <TouchableOpacity onPress={aoTocar}>
      <View style={styles.container}>
        <Image
          style={styles.imagem}
          source={{
            uri: "https://i.pinimg.com/474x/57/40/08/5740086ce904a58a1ad9621f65786b93.jpg?nii=t",
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 50,
    overflow: "hidden",
  },

  imagem: {
    width: 75,
    height: 75,
    resizeMode: "contain", 
  },
});
