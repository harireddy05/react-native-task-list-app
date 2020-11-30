import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Vibration, ToastAndroid, FlatList, StyleSheet, View } from 'react-native';
import SingleTask from '../components/SingleTask';
import TaskInput from '../components/TaskInput';
import { addTask, deleteTask } from '../store/actions/mealsAction';
import { store } from '../store/reducers/rootReducer';

export default function Home({ navigation }) {

    const rootTasks = useSelector(state => state.tasks)
    const [list, setList] = useState(rootTasks);

    const dispatch = useDispatch();

    useEffect(() => {
        setList(store.getState().tasks);
    });

    const deleteTaskHandler = (taskID) => {
        dispatch(deleteTask(taskID));
        ToastAndroid.show("That one's in the past now!", ToastAndroid.SHORT);
    }

    const addTaskHandler = (task) => {
        if (task === "") {
            Vibration.vibrate(20);
            ToastAndroid.show("Can't add an empty task!", ToastAndroid.SHORT);
        } else {
            dispatch(addTask(task));
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
