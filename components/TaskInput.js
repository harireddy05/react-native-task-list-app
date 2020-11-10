import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TaskInput = (props) => {

    const [task, setTask] = useState('');

    const taskInputHandler = (enteredText) => {
        setTask(enteredText);
    };

    return (
        <View
            style={styles.inputContainer}>
            <TextInput
                style={styles.inputText}
                onChangeText={taskInputHandler}
                value={task}
                placeholder="Enter text here." />
            <TouchableOpacity
                style={styles.saveButton}
                onPress={() => {
                    props.onTaskAddition(task); setTask('')
                }} >
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        flex: 1,
    },
    inputText: {
        width: '80%',
        padding: 10
    },
    saveButton: {
        borderWidth: 0.8,
        borderRadius: 7,
        padding: 5
    }
});

export default TaskInput;

