import { StyleSheet } from "react-native";

export default StyleSheet.create({
  inputStyle: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#714db2",
    padding: 10
  },
  inputErrorStyle: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "red",
    padding: 10
  },
  label: {
    fontSize: 16,
    color: "#4C4C4C",
    paddingBottom: 5
  },
  labelError: {
    fontSize: 16,
    color: "red",
    paddingBottom: 5
  }
});
