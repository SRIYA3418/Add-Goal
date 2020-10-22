import React, { useState } from "react";
import { StyleSheet, Button, View, FlatList, Modal } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalListInput from "./components/GoalListInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

 // const [isAddGoal, setIsAddGoal] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const addGoal = () => {
    setIsAddGoal(true);
  }

  return (
    <View style={styles.screen}>
      
      <GoalListInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
