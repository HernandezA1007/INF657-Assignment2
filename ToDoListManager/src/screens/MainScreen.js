import React, { useState } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import TaskInputForm from "../screens/TaskInputForm";
import TaskItem from "../components/TaskItem";

const MainScreen = () => {
    const [tasks, setTasks] = useState([]);

    const addTaskHandler = (taskDescription) => {
        setTasks(currentTasks => [
            ...currentTasks,
            { id: Math.random().toString(), description: taskDescription, completed: false }
        ]);
    };

    const deleteTaskHandler = (taskId) => {
        setTasks(currentTasks => currentTasks.filter(task => task.id !== taskId));
    };

    const toggleCompletionHandler = (taskId) => {
        setTasks(currentTasks => 
            currentTasks.map(task => 
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <View style={styles.screen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Antonio's To-Do List</Text>
            </View>
            <TaskInputForm onAddTask={addTaskHandler} />
            <FlatList 
                keyExtractor={(item) => item.id}
                data={tasks}
                renderItem={itemData => (
                    <TaskItem
                        task={itemData.item}
                        onToggleCompleted={() => toggleCompletionHandler(itemData.item.id)}
                        onDelete={() => deleteTaskHandler(itemData.item.id)}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // padding: 20,
        backgroundColor: "#121212",
    },
    title: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    titleContainer: {
        backgroundColor: "#1F1F1F",
        padding: 20,
        paddingTop: 50,
    },
});

export default MainScreen;