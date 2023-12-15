import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    borderRadius: 4, 
    borderColor: "#333333", 
    borderWidth: 1,
    backgroundColor: "#262626",
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center'
  }, 
  description: {
    fontSize: 14,
    color: "#F2F2F2",
    flex: 1,
    marginHorizontal: 8
  }, 
  descriptionChecked: {
    color: "#808080", 
    textDecorationLine: 'line-through'
  },
  baseCheck: {
    width: 18, 
    height: 18,
    borderRadius: 9999, 
    borderWidth: 2,
    borderColor: "#4EA8DE", 
    alignItems: 'center', 
    justifyContent: 'center'
  }, 
  checkedCheck: {
    backgroundColor: "#5E60CE", 
    borderColor: "#5E60CE"
  }
})