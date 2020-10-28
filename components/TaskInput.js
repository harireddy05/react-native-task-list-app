import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

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
            <Button title="Add" onPress={props.onTaskAddition.bind(this, task)} />
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
    }
});

export default TaskInput;