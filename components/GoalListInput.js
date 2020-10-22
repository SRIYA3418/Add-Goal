import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
const GoalListInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    //<Modal visible = {props.visiblity} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Course Goals"
          style={styles.input}
          onChangeText={goalInputHandler}s
          value={enteredGoal}
        />
        <Button title="add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
   // </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "blue",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalListInput;
