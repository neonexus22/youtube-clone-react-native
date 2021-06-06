import { StyleSheet } from "react-native";

export default StyleSheet.create({
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  timeContainer: {
    backgroundColor: "#00000099",
    width: 50,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    position: "absolute",
    right: 5,
    bottom: 5,
  },
  time: {
    color: "#fff",
    fontWeight: "bold",
  },
  titleRow: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  middleContainer: {
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  subtitle: {
    color: "gray",
    fontSize: 18,
    fontWeight: "600",
  },
  dots: {
    paddingTop: 10,
  },
});
