import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#191919',
    flex: 1
  }, 
  header: {
    backgroundColor: '#0D0D0D',
    alignItems: 'center', 
    justifyContent: 'center',
    paddingVertical: 70
  }, 
  form: {
    flexDirection: "row",
    gap: 4,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: -32
   },
  input: { 
    backgroundColor: '#262626',
    padding: 16,
    flex: 1,
    color: "#F2F2F2",
    fontSize: 16,
  },
  addButton: {
    width: 52,
    height: 52,
    borderRadius: 6, 
    backgroundColor: "#1E6F9F",
    color: "#F2F2F2",
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  listWrapper: {
    marginTop: 32,
    paddingHorizontal: 24
  }, 
  listHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  }, 
  taskCounterTitleWrapper: {
    flexDirection: 'row', 
    alignItems: 'center',
    gap: 8
  },
  createdTasksText: {
    fontSize: 14,
    fontWeight: 'bold', 
    color: '#4EA8DE'
  }, 
  finishedTasksText: {
    fontSize: 14,
    fontWeight: 'bold', 
    color: '#8284FA'
  }, 
  taskCounter: {
    color: '#D9D9D9', 
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "#333333",
    borderRadius: 99999
  }
})