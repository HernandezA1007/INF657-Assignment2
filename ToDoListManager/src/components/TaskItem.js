import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native"; // Checkbox not in library, TouchableOpacity is deprecated, can use Switch

const TaskItem = ({ task, onToggleCompleted, onDelete }) => {
    return (
        <View style={styles.taskCard}>
            {/* <Checkbox value={task.completed} onValueChanged={onToggleCompleted} /> */}
            {/* <Switch value={task.completed} onValueChanged={onToggleCompleted} /> */}
            <Pressable
                style={[styles.fakeSwitch, task.completed ? styles.switchCompleted : null]}
                onPress={onToggleCompleted}
            />
            <Text style={styles.text}>{task.description}</Text>
            {/* <TouchableOpacity></TouchableOpacity> */}
            <Pressable onPress={onDelete}>
                <Image
                    source={require("../../assets/remove.jpg")}
                    style={{ width: 24, height: 24 }}
                />
                {/* <Text style={styles.deleteButton}>X</Text> */}
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    taskCard: {
        // margin: 10,
        backgroundColor: "#FFFFFF", // f9f9f9
        borderRadius: 10, // 5
        padding: 20, // 10
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // shadow props
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    fakeSwitch: {
        width: 40,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#DDD",
        backgroundColor: "#EEE",
    },
    switchCompleted: {
        backgroundColor: "#81C784",
    },
    text: {
        flex: 1,
    },
    deleteButton: {
        fontWeight: "bold",
        color: "red",
    },
});

export default TaskItem;