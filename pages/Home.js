import React, { useState } from 'react';
import { StatusBar, Button, SafeAreaView, FlatList, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import initialList from './test';



export default function Home() {

    const [task, setTask] = useState('');
    const [list, setList] = useState(initialList);

    const taskInputHandler = (enteredText) => {
        setTask(enteredText);
    };

    const addTaskHandler = () => {
        setList(list => [{
            "id": Math.random(),
            "title": task,
            "completed": false
        }, ...list]);
        setTask('');
    }

    return (
        <View style={styles.homeScreen}>
            <View >
                <Text style={styles.titleText}>The List Application</Text>
            </View>
            <View
                style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    onChangeText={taskInputHandler}
                    value={task}
                    placeholder="Enter text here." />
                <Button title="Add" onPress={addTaskHandler} />
            </View>
            <ScrollView>
                {list.map((one) => {
                    return <View key={one.id} style={styles.listItem}>
                        <Text>
                            {one.title}
                        </Text>
                    </View>
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    homeScreen: {
        padding: 50
    },
    titleText: {
        textAlign: "center",
        fontSize: 30,
        paddingBottom: 30
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30
    },
    inputText: {
        width: '80%',
        padding: 10
    },
    listItem: {
        padding: 10,
        margin: 5,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }

});
