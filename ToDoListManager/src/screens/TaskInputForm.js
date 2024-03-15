import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native"; // button deprecated

const TaskInputForm = ({ onAddTask }) => { 
    const [enteredTask, setEnteredTask] = useState('');

    const taskInputHandler = (enteredText) => {
        setEnteredTask(enteredText);
    };

    const addTaskHandler = () => {
        if (enteredTask.trim().length === 0) { 
            return;
        }
        onAddTask(enteredTask);
        setEnteredTask('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Add Task"
                style={styles.input}
                onChangeText={taskInputHandler}
                value={enteredTask}
            />
            {/* <Button title="ADD" onPress={addTaskHandler} /> */}
            <Pressable style={styles.button} onPress={addTaskHandler}>
                <Text style={styles.buttonText}>ADD</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-around",
        alignItems: "center",
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginRight: 10,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 10,
        color: "black",
    },
    button: {
        backgroundColor: "#0D9488", // temporary color
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default TaskInputForm;