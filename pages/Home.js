import React, { useState } from 'react';
import { Vibration, ToastAndroid, FlatList, StyleSheet, View } from 'react-native';
import initialList from '../assets/initialList';
import SingleTask from '../components/SingleTask';
import TaskInput from '../components/TaskInput';

export default function Home() {

    const [list, setList] = useState(initialList);

    const deleteTaskHandler = (taskID) => {
        setList(list => { return list.filter((ye => ye.key !== taskID)) })
        ToastAndroid.show("That one's in the past now!", ToastAndroid.SHORT);
    }

    const addTaskHandler = (task) => {
        if (task === "") {
            Vibration.vibrate(20);
            ToastAndroid.show("Can't add an empty task!", ToastAndroid.SHORT);
        } else {
            setList(list => [{
                key: Math.random().toString(),
                title: task,
                completed: false
            }, ...list]);
        }
    }

    return (
        <View style={styles.homeScreen}>
            <TaskInput onTaskAddition={addTaskHandler} />
            <View style={styles.listStyle}>
                <FlatList
                    style={{ height: 300 }}
                    data={list}
                    keyExtractor={(item, index) => item.key}
                    renderItem={itemData =>
                        <SingleTask
                            title={itemData.item.title}
                            onDelete={() => deleteTaskHandler(itemData.item.key)}
                        />}
                />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    homeScreen: {
        padding: 20,
        flex: 1,
        justifyContent: "space-between"
    },
    listStyle: {
        flex: 9,
        paddingHorizontal: 10,
        marginVertical: 10
    }
});
